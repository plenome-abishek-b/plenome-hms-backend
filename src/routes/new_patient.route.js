const express = require('express');

const router = express.Router();

const PatientController = require('../controllers/new_patient.controller');
router.get('/',PatientController.getPatient);
router.post('/',PatientController.createPatient);
module.exports = router;