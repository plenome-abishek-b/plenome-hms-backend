const express = require('express');

const router = express.Router();

const appointment_doctor_shiftController = require('../controllers/appointment_doctor_shift.controller');
router.get('/',appointment_doctor_shiftController.getdoctor_shift);
router.post('/',appointment_doctor_shiftController.createdoctor_shift);
router.put('/',appointment_doctor_shiftController.updatedoctor_shift);

module.exports = router;