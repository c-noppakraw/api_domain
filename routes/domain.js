const express = require('express');
const router = express.Router();
const controllers = require('../controllers/domain');

router.get('/', controllers.list_domain);
router.post('/', controllers.add_domain);
router.get('/search', controllers.search_domain);
router.get('/:id', controllers.get_domain);
router.put('/:id', controllers.post_domain);
router.delete('/:id', controllers.delete_domain);
router.get('/check', controllers.checkDomain);

module.exports = router;