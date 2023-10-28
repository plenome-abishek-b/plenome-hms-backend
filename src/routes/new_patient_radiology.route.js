const express = require('express');

const router = express.Router();

const newpatientController = require('../controllers/new_patient_radiology.controller');
router.get('/',newpatientController.getpatient);
router.post('/',newpatientController.createPatient);

module.exports = router;