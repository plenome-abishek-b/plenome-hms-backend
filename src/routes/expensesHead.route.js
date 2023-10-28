const express = require('express');

const router = express.Router();

const ExpenseHeadController = require('../controllers/expenseHead.controller')
router.get('/',ExpenseHeadController.getExpenseHead)
module.exports = router;