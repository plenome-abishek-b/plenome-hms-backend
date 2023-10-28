const express = require('express');

const router = express.Router();

const IpdReportController = require('../controllers/ipdReport.controller')
router.get('/',IpdReportController.getIpdReport);
module.exports = router;