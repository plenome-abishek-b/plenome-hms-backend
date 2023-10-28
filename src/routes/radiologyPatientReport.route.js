const express = require('express');

const router = express.Router();

const RadiologyPatientReportController = require('../controllers/radiologyPatientReport.controller')
router.get('/',RadiologyPatientReportController.GetRadiologyPatientReport)
module.exports = router;