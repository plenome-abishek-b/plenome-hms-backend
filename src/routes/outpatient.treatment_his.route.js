const express = require('express');
const router = express.Router();

const TreatmentHistoryController = require('../controllers/outpatient.treatment_his.controller');





//get patients lab_investigation list

router.get('/',TreatmentHistoryController.getTreatmentHistory);



module.exports = router;