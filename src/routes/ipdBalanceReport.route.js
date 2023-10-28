const express = require('express');

const router = express.Router();

const IpdBalanceReportController = require('../controllers/ipdBalanceReport.controller');
router.get('/',IpdBalanceReportController.GetIpdBalanceReport);
module.exports = router;