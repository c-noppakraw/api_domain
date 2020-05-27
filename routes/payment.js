const express = require('express');
const router = express.Router();
const controllers = require('../controllers/payment');

router.get('/', controllers.list_payment);
router.post('/', controllers.add_payment);
router.get('/search', controllers.search_payment);
router.get('/:id', controllers.get_payment);
router.put('/:id', controllers.post_payment);
router.delete('/:id', controllers.delete_payment);

module.exports = router;