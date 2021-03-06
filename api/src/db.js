require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

let sequelize =
    process.env.NODE_ENV === "production"
        ? new Sequelize({
              database: DB_NAME,
              dialect: "postgres",
              host: DB_HOST,
              port: 5432,
              username: DB_USER,
              password: DB_PASSWORD,
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
        : new Sequelize(
              `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
              { logging: false, native: false }
          );

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
    .filter(
        (file) =>
            file.indexOf(".") !== 0 &&
            file !== basename &&
            file.slice(-3) === ".js"
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

const {
    User,
    Order,
    Category,
    Product,
    Order_products,
    Payment_detail,
    Review,
    Wishlist,
    Coupon
} = sequelize.models;

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Coupon)
Coupon.belongsTo(User);

User.belongsToMany(Product, { through: Review });
Product.belongsToMany(User, { through: Review });

Product.hasMany(Order_products);
Order_products.belongsTo(Product, {
    foreignKey: "productId",
});

Order.hasMany(Order_products);
Order_products.belongsTo(Order, {
    foreignKey: "orderId",
});

Product.belongsToMany(Category, {through: 'product_category'});
Category.belongsToMany(Product, {through: 'product_category'});

Order.hasOne(Payment_detail);
Payment_detail.belongsTo(Order);

Review.belongsTo(User, {
  foreignKey: 'userId'
})
User.belongsToMany(Product, { through: Wishlist });
Product.belongsToMany(User, { through: Wishlist });


module.exports = {
    ...sequelize.models,
    conn: sequelize,
};
