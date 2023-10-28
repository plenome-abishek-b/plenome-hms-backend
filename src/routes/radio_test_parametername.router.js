const express = require('express');

const router = express.Router();

const test_parameter_name_radiologycontroller = require('../controllers/radio_test_paramerername.controller');
router.get('/',test_parameter_name_radiologycontroller.get_test_parameter_name_radiology);

module.exports = router;