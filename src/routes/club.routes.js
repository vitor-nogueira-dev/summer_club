const express = require('express');
const controller = require('../controllers');
const checkRequiredFields = require('../middlewares');

const router = express.Router();

router.get('/partners', controller.getAllPartners);
router.get('/partners/:id', controller.getPartnerById);
router.post('/partners', checkRequiredFields, controller.createPartner);
router.patch('/partners/:id', controller.updatePartner);

module.exports = router;
