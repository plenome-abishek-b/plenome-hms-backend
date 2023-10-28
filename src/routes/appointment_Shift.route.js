const express = require('express');

const router = express.Router();

const appointment_shift1Controller = require('../controllers/appointment_shift.controller');
router.get('/',appointment_shift1Controller.getappointmentshift);
 router.post('/',appointment_shift1Controller.createappointmentshift);
module.exports = router;