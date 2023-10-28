const express = require('express');

const router = express.Router();

const transactionsController = require('../controllers/radiologyTransaction.controller');
router.post('/',transactionsController.createTransaction);
module.exports = router;