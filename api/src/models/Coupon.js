const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("coupon", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "CODE cannot be empty",
                },
                is: {
                    args: /^[A-Za-z0-9]{3,20}$/,
                    msg: "CODE contains errors",
                },
            }
        },
        discount: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Discount cannot be 0 / null",
                },
            },
        },
        global: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });
};
