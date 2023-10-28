const express = require('express');

const router = express.Router();

const ComponentIssueReportController = require('../controllers/componentIssueReport.controller')
router.get('/',ComponentIssueReportController.GetComponentIssueReport)
module.exports = router