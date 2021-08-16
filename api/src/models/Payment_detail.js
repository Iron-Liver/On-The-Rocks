const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("payment_detail", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    payment_status: {
      type: DataTypes.STRING,
      defaultValue: ""
    },
    payment_id: {
      type: DataTypes.BIGINT,
      defaultValue: 0
    },
    merchant_order_id: {
      type: DataTypes.BIGINT,
      defaultValue: 0
    }
  })
};