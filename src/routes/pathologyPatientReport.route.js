const express = require('express');

const router = express.Router();

const PathologyPatientReportController = require('../controllers/pathologyPatientReport.controller')
router.get('/',PathologyPatientReportController.getPathologyPatientReport)
module.exports = router;