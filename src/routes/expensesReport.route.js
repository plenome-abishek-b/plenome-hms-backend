const express = require('express');

const router = express.Router();

const ExpensesReportController = require('../controllers/expensesReport.controller');
router.get('/',ExpensesReportController.getExpensesReport);
module.exports = router;