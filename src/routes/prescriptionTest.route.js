const express = require('express');

const router = express.Router();

const PrescriptionTestController = require('../controllers/prescriptionTest.controller');
router.get('/',PrescriptionTestController.getPrescriptionTest);
router.post('/',PrescriptionTestController.createPrescriptionTest)
module.exports =router;