const express = require('express');

const router = express.Router();

const staff_rolescontroller= require('../controllers/user_by_roles.controller');
router.get('/',staff_rolescontroller.getroles);
router.post('/',staff_rolescontroller.createstaffroles);
module.exports = router;