const express = require('express');

const router = express.Router();

const opdDischargeReportController = require('../controllers/opdDischargedReport.controller');
router.get('/',opdDischargeReportController.GetOpdDischargedReport);
module.exports = router;