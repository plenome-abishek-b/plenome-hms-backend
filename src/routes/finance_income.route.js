const express = require('express');

const router = express.Router();

const finance_incomeController = require('../controllers/finance_income.controller');
router.get('/',finance_incomeController.getfinance_income);
router.post('/',finance_incomeController.createfinance_income);
router.put('/',finance_incomeController.updatefinance_income);

module.exports = router;