const express = require('express');
const router = express.Router();

const DischargedPatientController = require('../controllers/outpatient.discharge_card.controller');

//get all discharged patients list

router.get('/',DischargedPatientController.getAllDischargedPatients);

//get discharged patient profile by OPD ID

router.get('/:opd_details_id',DischargedPatientController.getDischargedPatientByID);

//get discharged patient list by Doctor Staff ID

router.get('/:discharge_by',DischargedPatientController.getDischargedPatientByDoctorID);



module.exports = router;