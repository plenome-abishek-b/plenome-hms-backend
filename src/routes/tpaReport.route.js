const express = require('express');

const router = express.Router();

const TpaReportController = require('../controllers/tpaReport.controller')
router.get('/',TpaReportController.getTpaReport)
module.exports = router;