const express = require('express');
const router = express.Router();

const LabInvestigationController = require('../controllers/outpatient.lab_invest.controller');





//get patients lab_investigation list

router.get('/',LabInvestigationController.getAllOutPatientLabInvestigation);



module.exports = router;