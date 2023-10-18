const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.get('/partners', controller.getAllPartners);

module.exports = router;
