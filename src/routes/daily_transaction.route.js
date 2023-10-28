const express = require('express');
const router = express.Router();

const daily_transaction_reportController = require('../controllers/daily_transaction.controller');

router.get('/',daily_transaction_reportController.getdaily_transaction_report);

module.exports = router;