const User = require('./User');
const Post = require('./Post');
const Reply = require('./Reply')

User.hasMany(Post, {
    foreignKey: 'id',
});

Post.hasMany(Reply, {
    foreignKey: 'post_id',
});

Post.belongsTo(User, {
    foreignKey: 'id',
});

module.exports = {
    User,
    Post,
    Reply,
};