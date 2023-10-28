const express = require('express');

const router = express.Router();

const OTReportController = require('../controllers/OTReport.controller')
router.get('/',OTReportController.getOTReport)
module.exports = router;