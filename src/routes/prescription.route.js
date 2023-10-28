const express = require('express');

const router = express.Router();

const PrescriptionController = require('../controllers/prescription.controller');
router.get('/',PrescriptionController.getPrescription);
module.exports = router;