const express = require('express');
const router = express.Router();

const patient_visit_reportController = require('../controllers/patient_visit_report.controller');

router.get('/',patient_visit_reportController.getpatient_visit_report);

module.exports = router;