const express = require('express');

const router = express.Router();
const staff_designation_controller = require('../controllers/staff_designation.controller');
router.post('/',staff_designation_controller.create_staff_designation);
router.get('/',staff_designation_controller.get_staff_designation);
module.exports =router;