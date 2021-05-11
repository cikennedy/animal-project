const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Create new lost and found post 
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Post.create({
            postTitle: req.body.postTitle,
            postContent: req.body.postContent,
            user_id: req.session.user_id
        })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

module.exports = router;