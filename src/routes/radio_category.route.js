const express = require('express');

const router = express.Router();

const radio_categorycontroller = require('../controllers/radio_category.controller');
router.get('/',radio_categorycontroller.get_radiology_category);
router.post('/',radio_categorycontroller.create_radiology_category);

module.exports = router;