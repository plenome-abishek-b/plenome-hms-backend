const express = require('express');

const router = express.Router();

const PurchaseController = require('../controllers/pharmacyPurchase.controller')
router.get('/',PurchaseController.getPurchase);
router.post('/',PurchaseController.createPurchase);
module.exports = router;