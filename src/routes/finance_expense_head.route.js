const express = require('express');

const router = express.Router();

const expense_headController = require('../controllers/finance_expense_head.controller');
router.get('/',expense_headController.getexpense_head);
router.post('/',expense_headController.createexpense_head);

module.exports = router;