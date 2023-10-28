const express = require('express');

const router = express.Router();

const TransactionController = require('../controllers/pharmacyTransactions.controller');
router.get('/',TransactionController.getTransaction);
router.post('/',TransactionController.createTransaction);
module.exports = router;