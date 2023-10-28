const express = require('express');

const router = express.Router();

const ReportDateController = require('../controllers/radiology_reportDate.controller');
router.get('/',ReportDateController.getDate);

module.exports = router;