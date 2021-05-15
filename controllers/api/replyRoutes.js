const router = require('express').Router();
const { Reply } = require('../../models');

// Get all replies
router.get('/', (req, res) => {
    // Find all comments and return as json 
    Reply.findAll({
        attributes: [
            'id',
            'reply',
            'post_id',
            'created_at'
        ],
    })
    .then(dbReplyData => res.json(dbReplyData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Post reply 
router.post('/', (req, res) => {
        Reply.create({
            reply: req.body.reply,
            post_id: req.body.post_id,
        })
        .then(dbReplyData => res.json(dbReplyData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});    


module.exports = router;