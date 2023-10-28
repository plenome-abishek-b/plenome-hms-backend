const express = require('express');

const router = express.Router();

const PrescriptionBasicController = require('../controllers/prescriptionBasic.controller');
router.get('/',PrescriptionBasicController.getPrescription);
router.get('/:id',PrescriptionBasicController.getPrescriptionBasicById);
router.post('/',PrescriptionBasicController.createPrescription);
module.exports =router;