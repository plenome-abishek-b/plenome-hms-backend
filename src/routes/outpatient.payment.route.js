const express = require('express');
const router = express.Router();

const outPatientPaymentController = require('../controllers/outpatient.payment.controller');



//create new patient payment

router.post('/',outPatientPaymentController.createPatientPayment);

//get all patients payment list

router.get('/',outPatientPaymentController.getAllOutPatientPayment);



module.exports = router;