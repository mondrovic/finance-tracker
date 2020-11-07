
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');


class Bill extends Model {}


Bill.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  bill_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount:{
    type: DataTypes.DECIMAL,
    allowNull: false,
    

  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'category',
      key: 'id'
    }
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'bill',
  }
);

module.exports = Bill;
