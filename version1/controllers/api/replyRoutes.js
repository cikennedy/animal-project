const router = require('express').Router();
const { Reply } = require('../../models');
const withAuth = require('../../utils/auth');

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

// Post Reply 
router.post('/', withAuth, (req, res) => {
    // create comment if the session exists 
    if (req.session) {
        Reply.create({
            reply: req.body.reply,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        })
        .then(dbReplyData => res.json(dbReplyData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

// Update a Reply with id 
router.put('/:id', withAuth, (req, res) => 
    Reply.update(
        {
            where: {
                id: req.params.id
            }
        },
        {
            reply: req.body.reply,
        }
    )
    .then(dbReplyData => {
        if(!dbReplyData) {
            res.status(404).json({ message: 'No reply found with the given id.'});
            return;
        }
        res.json(dbReplyData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
);

// Delete comment with id 
router.delete('/:id', withAuth, (req, res) => {
    Reply.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbReplyData => {
        if(!dbReplyData) {
            res.status(404).json({ message: 'No reply found with the given id.'});
            return;
        }
        res.json(dbReplyData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;