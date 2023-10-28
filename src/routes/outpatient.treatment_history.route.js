const express = require('express');
const router = express.Router();

const outPatientTreatmentHistoryController = require('../controllers/outpatient.treatment_history.controller');





//get patients treatment history list

router.get('/',outPatientTreatmentHistoryController.getAllOutPatientTreatmentHistory);



module.exports = router;