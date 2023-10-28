const express = require('express');

const router = express.Router();

const OpdBalanceReportController = require('../controllers/opdBalanceReport.controller');
router.get('/',OpdBalanceReportController.GetOpdBalanceReport)
module.exports = router;