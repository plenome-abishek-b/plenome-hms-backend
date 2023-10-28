const express = require('express');

const router = express.Router();

const ipd_details_controller = require('../controllers/ipd_details1.controller');
router.get('/',ipd_details_controller.get_ipd_details);
router.post('/',ipd_details_controller.create_ipd_details);
module.exports = router