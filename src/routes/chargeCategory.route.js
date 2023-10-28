const express = require('express');

const router = express.Router();

const ChargeCategoryController = require('../controllers/chargeCategory.controller');
router.get('/',ChargeCategoryController.getCharge);
router.post('/',ChargeCategoryController.createCharge);
module.exports = router;