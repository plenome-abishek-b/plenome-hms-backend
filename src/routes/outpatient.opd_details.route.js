const express = require('express');
const router = express.Router();

const outPatientOpdDetailsController = require('../controllers/outpatient.opd_details.controller');





//get patients Opd Details overview

router.get('/',outPatientOpdDetailsController.getOpdDetailsOverview);
router.post('/',outPatientOpdDetailsController.createOutPatient);



module.exports = router;