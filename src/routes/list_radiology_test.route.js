const express = require('express');

const router = express.Router();

const list_radiology_test_controller = require('../controllers/list_radiology_test.controller');

router.get('/',list_radiology_test_controller.getradiologytest);
router.post('/',list_radiology_test_controller.createradiology);

module.exports = router;