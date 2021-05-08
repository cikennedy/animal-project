const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);

// const animals = [
//     {
//       id: 1,
//       animal_name: 'Chimpanzee',
//       description: 'Endangered',
//     },
//     {
//         id: 2,
//         animal_name: 'Asian Elephant',
//         description: 'Endangered',
//       },
//     {
//       id: 3,
//       animal_name: 'Western Lowland Gorilla',
//       description: 'Endangered',
//     },
//   ];
  
  
//   router.get('/', async (req, res) => {
//     res.render('all', { animals });
//   });

  router.use('/api', apiRoutes);
  
  // get one animal
  router.get('/animal/:num', async (req, res) => {
    return res.render('animal', animals[req.params.num - 1]);
  });
  
  module.exports = router;