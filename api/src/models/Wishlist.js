const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("wishlist", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    timestamp: {
        type: DataTypes.DATE
    }
  });
};