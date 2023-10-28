const express = require('express');

const router = express.Router();
const consultant_register_controller = require('../controllers/ipd_consultant_register.controller');
router.post('/',consultant_register_controller.create_consultant_register);
router.get('/',consultant_register_controller.get_constultant_register);
module.exports=router;