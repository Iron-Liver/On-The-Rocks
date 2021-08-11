const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("payment_detail", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM({
        values: ["paid", "pending"]
      })
    }
  })
};