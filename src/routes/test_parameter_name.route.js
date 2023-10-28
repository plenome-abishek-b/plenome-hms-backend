const express = require('express');

const router = express.Router();

const test_parameter_nameController = require('../controllers/test_parameter_name.controller');
router.get('/',test_parameter_nameController.get_test_parameter_name);

module.exports = router;