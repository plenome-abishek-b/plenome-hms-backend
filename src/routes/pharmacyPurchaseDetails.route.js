const express = require('express');

const router = express.Router();

const PharmacyPurchaseDetailController = require('../controllers/pharmacyPurchaseDetail.controller');
router.post('/',PharmacyPurchaseDetailController.createDetail);
router.get('/',PharmacyPurchaseDetailController.getPurchaseDetails)
module.exports = router;