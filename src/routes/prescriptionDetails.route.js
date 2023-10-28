const express = require('express');

const router = express.Router();

const PrescriptionDetailsController = require('../controllers/prescriptionDetails.controller');
router.get('/',PrescriptionDetailsController.getPrescription);
router.get('/:basic_id',PrescriptionDetailsController.getPrescriptionDetailsById);
router.post('/',PrescriptionDetailsController.createPrescription);
module.exports = router;