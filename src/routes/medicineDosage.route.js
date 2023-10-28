const express = require('express');

const router = express.Router();

const MedDosageController = require('../controllers/medicineDosage.controller');
router.get('/',MedDosageController.getMedicineDosage);
router.post('/',MedDosageController.createMedicineDosage);
module.exports = router;