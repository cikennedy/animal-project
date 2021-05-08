const { Post } = require('../models')

const userData = [
  {
    "postTitle": "Test",
    "postContent": "This is a test",
    "postPhoto": "test.jpg",
    "user_id": "1"
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;