const express = require('express');

const router = express.Router();
const appointmentshift_controller = require('../controllers/appointmentshift.controller');
router.get('/',appointmentshift_controller.getshiftappointment);

module.exports = router;