const router = require('express').Router();
const { User, Post, Reply } = require('../models');
const withAuth = require('../utils/auth');

// Find lost and found posts by the user that is logged in
router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'post_title',
            'post_content',
            'created_at'
        ],
        include: [
            {
                model: Reply,
                attributes: [
                    'id',
                    'reply',
                    'post_id',
                    'created_at'
                ],
            },
        ]
    })
    .then(postData => {
        const posts = postData.map(post => post.get({ plain: true }));
        // Use dashboard template 
        res.render('dashboard', {
            posts,
            email: req.session.email,
            username: req.session.username,
            user_id: req.session.user_id,
            loggedIn: true
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;