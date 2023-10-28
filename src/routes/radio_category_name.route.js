const express = require('express');

const router = express.Router();

const category_name_radiology_controller = require('../controllers/radio.categoryname.controller');
router.get('/',category_name_radiology_controller.get_category_name_radiology);

module.exports = router;