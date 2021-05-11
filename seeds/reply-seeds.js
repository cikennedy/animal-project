const { Reply } = require('../models')

const replyData = [
  {
    reply: "Test",
    post_id: "1",
  },
];

const seedReplies = () => Reply.bulkCreate(replyData);

module.exports = seedReplies;