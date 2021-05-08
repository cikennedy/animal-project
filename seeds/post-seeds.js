const { Post } = require('../models')

const postData = [
  {
    "postTitle": "Test",
    "postContent": "This is a test",
    "postPhoto": "test.jpg",
    "user_id": "1"
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;