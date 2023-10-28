const express = require('express');

const router = express.Router();

const staff_payrollcontroller = require('../controllers/staff_payroll.controller');

router.get('/',staff_payrollcontroller.getallpayroll);

module.exports = router;