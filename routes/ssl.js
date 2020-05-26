const express = require('express');
const router = express.Router();
const controllers = require('../controllers/ssl');

router.get('/', controllers.list_ssl);
router.post('/', controllers.add_ssl);
router.get('/search', controllers.search_ssl);
router.get('/:id', controllers.get_ssl);
router.put('/:id', controllers.post_ssl);
router.delete('/:id', controllers.delete_ssl);

module.exports = router;