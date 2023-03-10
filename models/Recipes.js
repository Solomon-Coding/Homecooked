const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class recipes extends Model {}


recipes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    instructions: {
      type: DataTypes.VARCHAR(65535),
      allowNull: false,
    },
    ingredients: {
        type: DataTypes.VARCHAR(65535),
        allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
    },
    style_id: {
      type: DataTypes.INTEGER,
    }
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipes',
  }
);

module.exports = recipes;
