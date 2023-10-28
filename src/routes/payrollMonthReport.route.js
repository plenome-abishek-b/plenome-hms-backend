const express = require('express');

const router = express.Router();

const PayrollMonthReportController = require('../controllers/payrollMonthReport.controller')
router.get('/',PayrollMonthReportController.GetPayrollReport)
module.exports = router;