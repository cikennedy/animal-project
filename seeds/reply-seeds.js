const { Reply } = require('../models')

const replyData = [
  {
    reply: "Test",
    post_id: "This is a test",
  },
];

const seedReplies = () => Reply.bulkCreate(replyData);

module.exports = seedReplies;