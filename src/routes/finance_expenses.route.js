const express = require('express');

const router = express.Router();

const finance_expensesController = require('../controllers/finace_expenses.controller');
router.get('/',finance_expensesController.getexpenses);
router.post('/',finance_expensesController.createexpenses);
module.exports = router;