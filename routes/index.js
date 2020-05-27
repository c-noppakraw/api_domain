const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
});
router.use('/domains', require('./domain'));
router.use('/ssl', require('./ssl'));
router.use('/transaction', require('./payment'));

module.exports = router;
