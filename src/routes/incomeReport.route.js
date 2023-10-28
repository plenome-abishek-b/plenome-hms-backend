const express = require('express');

const router = express.Router();

const IncomeReportController = require('../controllers/incomeReport.controller');
router.get('/',IncomeReportController.getIncomeReport)
module.exports = router;