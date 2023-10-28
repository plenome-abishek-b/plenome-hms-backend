const express = require('express');

const router = express.Router();

const staff_rolescontroller= require('../controllers/consultant.controller');
router.get('/',staff_rolescontroller.getroles);
module.exports = router;