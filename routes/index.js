const router = require('express').Router();
//import API routes from api/index.js
const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes');

//add prefixes to routes
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
