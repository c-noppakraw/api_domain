const express = require('express');
const router = express.Router();
const controllers = require('../controllers/owner');

router.get('/', controllers.list_owner);
router.post('/', controllers.add_owner);
router.get('/search', controllers.search_owner);
router.get('/:id', controllers.get_owner);
router.put('/:id', controllers.post_owner);
router.delete('/:id', controllers.delete_owner);

module.exports = router;