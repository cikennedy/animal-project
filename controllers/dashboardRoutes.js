const router = require('express').Router();
const { Post, Reply } = require('../models');
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
            'post_photo',
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
            loggedIn: true
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Edit lost and found post by selecting the id of the blog post 
router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_title',
            'post_content',
            'post_photo',
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
    // Error if no lost and found post exists with the id 
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with the given id.'});
            return;
        }

        // Use edit-post handlebars template 
        const post = dbPostData.get({ plain: true });
        res.render('edit-post', {
            post,
            loggedIn: true
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



module.exports = router;