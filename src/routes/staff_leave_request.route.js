const express = require('express');

const router = express.Router();
const staff_leave_request_controller = require('../controllers/staff_leave_request.controller');
router.get('/',staff_leave_request_controller.getleaverequest)
router.post('/',staff_leave_request_controller.createstaff_leave_request);
module.exports = router;