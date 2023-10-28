const express = require('express');

const router = express.Router();

const MedicineNameController = require('../controllers/medicineName.controller');
router.get('/',MedicineNameController.getName);
module.exports = router;