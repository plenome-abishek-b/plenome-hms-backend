const express = require('express');

const router = express.Router();

const patientController = require('../controllers/patients.controller');
router.post('/',patientController.createPatient);
router.get('/',patientController.getpatients);
module.exports = router;