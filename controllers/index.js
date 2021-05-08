const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const homeRoutes = require('./api/homeRoutes');
// const userRoutes = require('');

router.use('/api/users', userRoutes);
router.use('/', homeRoutes);

// router.use('', userRoutes);

module.exports = router;
