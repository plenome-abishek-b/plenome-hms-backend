const express = require('express');

const router  = express.Router();

const test_nameController = require('../controllers/test_name.controller');
router.get('/',test_nameController.get_test_name);

module.exports = router;