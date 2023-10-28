const express = require('express');
const router = express.Router();

const patientTimelineController = require('../controllers/outpatient.timeline.controller');



//create new patient timeline

router.post('/',patientTimelineController.createTimeline);

//get all patients timeline list

router.get('/',patientTimelineController.getAllPatientsTimeline);


module.exports = router;