const router = require('express').Router();
const { Reply } = require('../../models');

// Get all comments
router.get('/', (req, res) => {
    Reply.findAll({
        attributes: [
            'id',
            'comment_content',
            'post_id',
            'user_id',
            'created_at'
        ],
    })
    .then(replyData => res.json(replyData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;