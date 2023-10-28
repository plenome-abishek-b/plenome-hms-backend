const express = require('express');

const router = express.Router();

const RadiologyCategoryController = require('../controllers/radiologyCategory.controller')
router.get('/',RadiologyCategoryController.getRadioCategory)
module.exports = router;