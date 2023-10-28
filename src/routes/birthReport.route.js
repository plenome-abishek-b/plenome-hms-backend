const express = require('express');

const router = express.Router();

const BirthReportController = require('../controllers/birthReport.controller')
router.get('/',BirthReportController.GetBirthReport)
module.exports = router;