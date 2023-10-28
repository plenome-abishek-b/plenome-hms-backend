const express = require('express');

const router = express.Router();

const PayrollReportController = require('../controllers/payrollReport.controller')
router.get('/',PayrollReportController.GetPayrollReport)
module.exports = router;