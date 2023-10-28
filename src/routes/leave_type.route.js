const express = require('express');
const router = express.Router();
const leave_type_controller = require('../controllers/leave_type.controller');

router.post('/',leave_type_controller.create_leave_types);
router.get('/',leave_type_controller.get_leave_types)

module.exports = router;