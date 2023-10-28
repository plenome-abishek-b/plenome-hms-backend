const express = require('express');

const router = express.Router();

const AmbulanceCallReportController = require('../controllers/ambulanceCallReport.controller')
router.get('/',AmbulanceCallReportController.getAmbulanceCallReport)
module.exports = router;