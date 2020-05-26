const express = require('express');
const router = express.Router();
const controllers = require('../controllers/payment');

router.get('/', controllers.list_payment);
router.post('/', controllers.add_payment);

module.exports = router;