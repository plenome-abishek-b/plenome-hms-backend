const express = require('express');
const router = express.Router();

const patientChargesController = require('../controllers/outpatient.charges.controller');



//create new patient charges

router.post('/',patientChargesController.createCharges);

//get all patients charges list

router.get('/',patientChargesController.getAllPatientsCharges);



module.exports = router;