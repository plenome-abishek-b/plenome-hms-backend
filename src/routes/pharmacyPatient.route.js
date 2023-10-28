const express = require('express');

const router = express.Router();

const PatientController = require('../controllers/pharmacyPatient.controller');
router.get('/',PatientController.getPatient);
router.get('/:id',PatientController.getPatientById);
router.post('/',PatientController.createPatient);
module.exports = router;