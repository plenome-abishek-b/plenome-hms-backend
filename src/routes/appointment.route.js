const express = require('express');

const router = express.Router();

const AppointmentController = require('../controllers/appointment.controller');
router.get('/',AppointmentController.getAppointmentsDoctorWise);
router.post('/',AppointmentController.createAppointment);
module.exports = router;