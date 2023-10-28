const express = require('express');
const router = express.Router();

const patientVisitController = require('../controllers/outpatient.visits.controller');



//create new patient visits

router.post('/',patientVisitController.createVisits);

//get all patients visits list

router.get('/',patientVisitController.getAllPatientsVisits);





module.exports = router;