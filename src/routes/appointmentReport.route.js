const express = require('express');

const router = express.Router();

const AppointmentReportController = require('../controllers/appointmentReport.controller');
router.get('/',AppointmentReportController.getAppointmentReport);
module.exports = router;