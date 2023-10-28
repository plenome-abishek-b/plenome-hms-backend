const express = require('express');
const router = express.Router();

const outPatientMedicationController = require('../controllers/outpatient.medication.controller');



//create new patient medication

router.post('/',outPatientMedicationController.createPatientMedication);

//get all patients medication list

router.get('/',outPatientMedicationController.getAllOutPatientMedication);



module.exports = router;