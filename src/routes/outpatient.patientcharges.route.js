const express = require('express');
const router = express.Router();

const outPatientChargesController = require('../controllers/outpatient.patientcharges.controller');



//create new patient charges

router.post('/',outPatientChargesController.createPatientCharges);

//get all patients charges list

router.get('/',outPatientChargesController.getAllOutPatientCharges);



module.exports = router;