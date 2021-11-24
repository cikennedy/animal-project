// requirements for model 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create post model 
class Post extends Model {}


Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post_title: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        post_location: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        post_content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        animal_type: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        post_photo : {
            type: DataTypes.STRING,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        }
       
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;