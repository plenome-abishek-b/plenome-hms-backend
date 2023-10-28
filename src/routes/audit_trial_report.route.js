const express = require('express');

const router = express.Router();

const audit_trial_reportController = require('../controllers/audit_trial_report.controller');

router.get('/',audit_trial_reportController.getaudit_trial_report);

module.exports = router;