const { Post } = require('../models')

const postData = [
  {
    post_title: "Test",
    post_content: "This is a test",
    post_photo: "test.jpg",
    user_id: "1"
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;