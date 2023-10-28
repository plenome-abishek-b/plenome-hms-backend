const express = require('express');
const router = express.Router();

const outPatientLabInvestigationController = require('../controllers/outpatient.lab_investigation.controller');





//get patients lab_investigation list

router.get('/',outPatientLabInvestigationController.getAllOutPatientLabInvestigation);



module.exports = router;