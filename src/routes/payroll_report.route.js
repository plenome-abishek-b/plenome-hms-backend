const express = require('express');

const router = express.Router();

const payroll_reportContoller = require('../CONTROLLERS/payroll_report.controller');
router.get('/',payroll_reportContoller.getpayroll_report);

module.exports = router;