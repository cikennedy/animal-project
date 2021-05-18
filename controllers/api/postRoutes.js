const router = require('express').Router();
const { User, Post, Reply } = require('../../models');
const withAuth = require('../../utils/auth');


// Get all posts 
router.get('/', (req, res) => {
    // Same as home route, but returning data as json 
    Post.findAll({
        attributes: [
            'id',
            'post_title',
            'post_location',
            'post_content',
            'animal_type',
            'post_photo',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: [
                    'owner_name'
                ]
            },
            {
                model: Reply,
                attributes: [
                    'id',
                    'reply',
                    'post_id',
                    'created_at'
                ],
                include: {
                    model: User,
                    attributes: ['owner_name']
                }
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Get one post by id
router.get('/:id', (req, res) => {
    // Same as home route, but returning as json
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_title',
            'post_location',
            'post_content',
            'animal_type',
            'post_photo',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: [
                    'owner_name'
                ]
            },
            {
                model: Reply,
                attributes: [
                    'id',
                    'reply',
                    'post_id',
                    'created_at'
                ],
                include: {
                    model: User,
                    attributes: ['owner_name']
                }
            }
        ]
    })

    // Return error if there is no blog post with the id given 
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with the given id.'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Create new post 
router.post('/', withAuth, (req, res) => {
    // Creates a post with the title, content, and user id
    Post.create({
        post_title: req.body.post_title,
        post_location: req.body.post_location,
        post_content: req.body.post_content,
        animal_type: req.body.animal_type,
        post_photo: req.body.picurl,
        user_id: req.session.user_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Update a blog post by id
router.put('/:id', withAuth, (req, res) => 
    // User can update the title and blog post content as long as logged in
    Post.update(
        {
            post_title: req.body.post_title,
            post_location: req.body.post_location,
            post_content: req.body.post_content,
            animal_type: req.body.animal_type,
            post_photo: req.body.picurl,
        },
        {
            where: {
                id: req.params.id
            }
        },
    )
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({ message: 'No post found with the given id.'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
);

// Delete a blog post by id 
router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({ message: 'No post found with the given id.'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;