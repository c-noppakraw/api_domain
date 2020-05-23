const express = require('express');
const router = express.Router();
const connection = require('../config/db');
const controllers = require('../controllers/domain');
const model = require('../model/domain');

router.get('/', controllers.list_domain);
router.post('/create', controllers.add_domain);
router.get('/search', controllers.search_domain);
router.get('/:id/edit', controllers.get_domain);
router.put('/:id/edit', controllers.post_domain);
router.delete('/:id', controllers.delete_domain);

module.exports = router;