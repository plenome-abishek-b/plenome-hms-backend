const express = require('express');

const router = express.Router();

const RadiologyReportController = require('../controllers/radiologyReport.controller');
router.get('/',RadiologyReportController.getreport);
router.post('/',RadiologyReportController.createreport);
module.exports = router;