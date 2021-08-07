const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("order_products", {
    units: {
      type: DataTypes.INTEGER,
    },
    unitPrice: {
      type: DataTypes.FLOAT,
    },
  });
};