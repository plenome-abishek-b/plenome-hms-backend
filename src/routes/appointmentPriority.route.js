const express = require('express');

const router = express.Router();

const AppointmentPriorityController = require('../controllers/appointmentPriority.controller');
router.get('/',AppointmentPriorityController.getPriority)
module.exports = router;