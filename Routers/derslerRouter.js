const express = require('express');

const Ders = require('../models/ders');

const router = express.Router();

const controller = require('../controllers/derslerController');

router.get('/', controller.ders_get);

router.post('/', controller.ders_put);

router.get('/:id', controller.ders_get_id);

router.delete('/:id', controller.ders_delete);

module.exports = router;
