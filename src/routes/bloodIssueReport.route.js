const express = require('express');

const router = express.Router();

const BloodIssueReportController = require('../controllers/bloodIssueReport.controller')
router.get('/',BloodIssueReportController.GetBloodIssueReport)
module.exports = router;