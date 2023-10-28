const express = require('express');

const router = express.Router();

const staff_rolescontroller= require('../controllers/user_by_nurse.controller');
router.get('/',staff_rolescontroller.getroles);
module.exports = router;