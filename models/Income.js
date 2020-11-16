const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Income extends Model {}

Income.init(
    {
      amount: {
        type: DataTypes.DECIMAL,
        defaultValue: 100,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        },
    },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'income',
    }
  );
  
  module.exports = Income;