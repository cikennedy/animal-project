const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const userRoutes = require('');

router.use('/users', userRoutes);

// router.use('', userRoutes);

module.exports = router;
