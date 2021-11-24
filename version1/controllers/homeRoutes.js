const router = require('express').Router();
const { User, Post, Reply } = require('../models');

// Get all lost and found posts
router.get('/', (req, res) => {
  Post.findAll({
      // Order lost and found from newest post to oldest
      order: [[ 'created_at', 'DESC' ]],
      // Include the below attributes from the Post table
      attributes: [
          'id',
          'post_title',
          'post_location',
          'post_content',
          'animal_type',
          'post_photo',
          'created_at'
      ],
      // Include the user's name
      include: [
          {
              model: User,
              attributes: ['owner_name']
          },
          // Include all replies 
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
  .then(dbPostData => {
      // Create an array for the posts and pass the posts to the homepage handlebars template
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('homepage', {
          posts, loggedIn: req.session.loggedIn
      });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

// Get one lost and found post by id
router.get('/post/:id', (req, res) => {
    console.log('WE HIT THE POST id route!!!')
  // Find one post by the id parameter 
  Post.findOne({
      where: {
          id: req.params.id
      },
      // Same as the get all posts route above 
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
              attributes: ['owner_name']
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

      // Render data to single-animal handlebars template 
      const post = dbPostData.get({ plain: true });
      res.render('single-animal', {
          post,
          loggedIn: req.session.loggedIn
      });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

// User goes to the login/signup page if not logged in
router.get('/login', (req, res) => {
  // If a user is logged in, redirect the request to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/about', (req, res) => {
    // If a user is logged in, redirect the request to the homepage


    res.render('about');
});

router.get('/contact', (req, res) => {
// If a user is logged in, redirect the request to the homepage


    res.render('contact');
});

router.get('/search', (req, res) => {

    res.render('search');
});

module.exports = router;

