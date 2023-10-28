const express = require('express');

const router = express.Router();

const MedicineSupplierController = require('../controllers/medicine_Supplier.controller');
router.get('/',MedicineSupplierController.getMedicineSupplier);
router.post('/',MedicineSupplierController.createMedicineSupplier);
module.exports = router;