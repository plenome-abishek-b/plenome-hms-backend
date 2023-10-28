const express = require('express');

const router = express.Router();

const referral_reportController = require('../controllers/referral_report.controller');
router.get('/',referral_reportController.getreferral_report);

module.exports = router;