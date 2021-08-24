const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('review', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        stars:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Calification field must not be empty',
                },
                is: {
                    args: /^[1-5]{1,5}$/,
                    msg: 'Name field contains errors'
                }
            }
        },
        description: {
            type: DataTypes.TEXT,
            validate: {
                notEmpty: {
                    msg: 'Description field must not be empty',
                },
                is: {
                    args: /^[A-Za-z %0-9/().,'!¡¿?+-]{28,512}$/,
                    msg: 'Description field contains errors'
                }
            },
        },
        anonymous: {
            type: DataTypes.BOOLEAN
        }
    })
};
