const express = require('express');
const router = express.Router();

const outPatientLiveConsultationController = require('../controllers/outpatient.live_consultation.controller');





//get patients live consultation list

router.get('/',outPatientLiveConsultationController.getAllOutPatientLiveConsultation);



module.exports = router;