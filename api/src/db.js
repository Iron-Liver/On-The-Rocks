require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

let sequelize =
    process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: "none",
        dialect: "postgres",
        host: "none",
        port: 5432,
        username: "none",
        password: "none",
        pool: {
            max: 3,
            min: 1,
            idle: 10000,
        },
        dialectOptions: {
            ssl: {
            require: true,
            rejectUnauthorized: false,
            },
            keepAlive: true,
        },
        ssl: true,
    })
    :
    new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
        { logging: false, native: false }
    );

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
    .filter(
        (file) =>
            file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    )
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, "/models", file)));
    });
modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);

let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const {User, Order} = sequelize.models

User.hasMany(Order, { constraints: false });
Order.belongsTo(User, { constraints: false });

module.exports = {
    ...sequelize.models, 
    conn: sequelize, 
};
