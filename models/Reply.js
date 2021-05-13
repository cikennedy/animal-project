const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reply extends Model {}

// Create columns and datatypes for comments on blog posts
Reply.init(
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    reply: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'post',
          key: 'id'
        },
    },
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'reply'
    }
  );

module.exports = Reply;