const express = require('express');

const router = express.Router();


const BloodDonorReportController = require('../controllers/bloodDonorReport.controller')
router.get('/',BloodDonorReportController.GetBloodDonorReport)
module.exports = router;