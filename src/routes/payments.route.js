const express = require('express');

const router = express.Router();
const paymentController = require('../controllers/payments.controller');
router.post('/',paymentController.createPayments);
router.get('/',paymentController.getPayments);
module.exports = router;
