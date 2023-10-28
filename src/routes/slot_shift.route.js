const express = require('express');

const router = express.Router();

const appointment_shiftController = require('../controllers/slot_shift.controller');
router.get('/',appointment_shiftController.getappointmentshift);
// router.post('/',appointment_shiftController.createappointmentshift);
module.exports = router;