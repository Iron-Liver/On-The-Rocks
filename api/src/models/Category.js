const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("category", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
				notEmpty: {
					msg: 'Name field must not be empty',
				},
				is: {
					args: /^[A-Za-z .'-]{3,20}$/,
					msg: 'Name field contains errors'
				}
			},
        },
        description: {
            type: DataTypes.TEXT,
            validate: {
				notEmpty: {
					msg: 'Description field must not be empty',
				},
				is: {
					args: /^[A-Za-z ().,'-]{28,280}$/,
					msg: 'Description field contains errors'
				}
			},
        },
        image: {
            type: DataTypes.TEXT,
            validate: {
				notEmpty: {
					msg: 'Image field must not be empty',
				},
				is: {
					args: /[(http(s)?):(www)?a-zA-Z0-9@:%._~#=]{2,256}[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/,
					msg: 'Image field contains errors'
				}
			}
        },
    });
};
