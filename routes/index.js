const express = require('express');
const router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
// });
require('../controllers/line');
router.use('/domains', require('./domain'));
router.use('/ssl', require('./ssl'));
router.use('/transaction', require('./payment'));
router.use('/owners', require('./owner'));

module.exports = router;
