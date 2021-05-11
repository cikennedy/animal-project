const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// Create new lost and found post 
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Post.create({
            title: req.body.title,
            post_content: req.body.post_content,
            user_id: req.session.user_id
        })
        .then(postData => res.json(postData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

module.exports = router;