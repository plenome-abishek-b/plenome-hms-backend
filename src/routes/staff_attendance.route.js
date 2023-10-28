const express = require('express');

const router = express.Router();

const staff_attendance_reportController = require('../controllers/staff_attendance.controller');
router.get('/',staff_attendance_reportController.getstaff_attendance_report);

module.exports = router;