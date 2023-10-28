const express = require('express');
const router = express.Router();
const patient_bill_reportController = require('../controllers/patient_bill_report.controller');

router.get('/', patient_bill_reportController.getpatient_bill_report);

module.exports = router;
