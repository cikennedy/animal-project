const router = require('express').Router();
const { User, Post, Reply } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all users 
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] },
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Get one user
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: { exclude: ['password'] },
        include: [
            {
                model: Post,
                attributes: [
                    'id',
                    'post_title',
                    'post_location',
                    'post_content',
                    'animal_type',
                    'post_photo',
                    'created_at'
                ],
            },
            {
                model: Reply,
                attributes: [
                    'id',
                    'reply',
                    'created_at'
                ],
                include: {
                    model: Post,
                    attributes: [
                        'post_title'
                    ]
                }
            },
        ]
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'No user found with the given id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// Create new user 
router.post('/', (req, res) => {
        User.create({
            email: req.body.email,
            owner_name: req.body.owner_name,
            password: req.body.password
        })
        .then(dbUserData => {
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.email = dbUserData.email;
                req.session.owner_name = dbUserData.owner_name;
                req.session.loggedIn = true;
                res.json(dbUserData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
);

// User login 
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'No user found with the given id.'});
            return;
        }
       
        const correctPassword = dbUserData.checkPassword(req.body.password);

        if (!correctPassword) {
            res.status(400).json({ message: 'Incorrect Password' })
            return;
        }

        req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.email = dbUserData.email;
                req.session.owner_name = dbUserData.owner_name;
                req.session.loggedIn = true;

                res.json({ user: dbUserData, message: "You have been logged in." });
        });
    });
});

// User logout. This is post as listed in the logout.js file 
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        // Removes session variables
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});


// Update a user
router.put('/:id', withAuth, (req, res) => 
    User.update(req.body, {
        individualHooks: true,
            where: {
                id: req.params.id
            }
        })
    .then(dbUserData => {
        if(!dbUserData[0]) {
            res.status(404).json({ message: 'No user found with the given id.'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
);

// Delete a user 
router.delete('/:id', withAuth, (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'No user found with the given id.'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;