const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("order", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "First name cannot be empty",
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Last name cannot be empty",
        },
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Address cannot be empty",
        },
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "City cannot be empty",
        },
      },
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Payment method cannot be empty",
        },
      },
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "City cannot be empty",
        },
      },
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Total cannot be empty",
        },
        isFloat: {
          msg: "Total must be integer/decimal",
        },
      },
    },
    status: {
      type: DataTypes.ENUM({
        values: ["created", "cancelled", "processing", "completed"],
      }),
    },
  });
};
