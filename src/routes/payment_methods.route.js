const express = require('express');

const router = express.Router();

const payment_methodsController = require('../controllers/payment_methods.controller');
router.get('/',payment_methodsController.getpayment_methods);
router.post('/',payment_methodsController.createpayment_methods);
router.put('/',payment_methodsController.updatedpayment_methods);

module.exports = router;