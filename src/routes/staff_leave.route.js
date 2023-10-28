const express = require('express');

const router = express.Router();
const staff_leave_controller = require('../controllers/staff_leave.controller');
router.get('/',staff_leave_controller.getleavelist)
router.post('/',staff_leave_controller.create_leave_list);
module.exports = router;
