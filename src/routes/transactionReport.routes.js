const express = require('express');

const router = express.Router();

const TransactionReportController = require('../controllers/transactionReport.controller')
router.get('/',TransactionReportController.GetTransactions)
module.exports = router;