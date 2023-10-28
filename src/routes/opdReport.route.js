const express = require('express');

const router = express.Router();

const OpdReportController = require('../controllers/opdReport.controller');
router.get('/',OpdReportController.getOpdReport);
module.exports = router;