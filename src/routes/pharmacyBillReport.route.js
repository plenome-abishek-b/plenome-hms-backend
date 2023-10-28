const express = require('express');

const router = express.Router();

const PharmacyBillReportController = require('../controllers/pharmacyBillReport.controller');
router.get('/',PharmacyBillReportController.getPharmacyBillReport);
module.exports = router;