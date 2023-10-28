const express = require('express');

const router = express.Router();

const staff_rolescontroller= require('../controllers/slot_doctor.controller');
router.get('/',staff_rolescontroller.getroles);
module.exports = router;