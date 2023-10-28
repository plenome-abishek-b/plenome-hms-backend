const express = require('express');

const router = express.Router();

const MedicineRoute = require('../controllers/PharmacyMedicine.controller')
router.get('/',MedicineRoute.getMedicine);
router.post('/',MedicineRoute.createPurchase);
module.exports = router;