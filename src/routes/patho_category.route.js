const express = require('express');

const router = express.Router();

const patho_categorycontroller = require('../controllers/patho_category.controller');
router.get('/',patho_categorycontroller.getpathology_category);
router.post('/',patho_categorycontroller.createpathology_category);

module.exports = router;