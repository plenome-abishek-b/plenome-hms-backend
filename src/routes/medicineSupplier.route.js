const express = require('express');

const router = express.Router();

const MedicineSupplierController = require('../controllers/medicineSupplier.controller');
router.get('/',MedicineSupplierController.getMedicineSupplier);
module.exports = router;