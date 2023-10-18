const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.get('/partners', controller.getAllPartners);
router.get('/partners/:id', controller.getPartnerById);

module.exports = router;
