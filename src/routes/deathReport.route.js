const express = require('express');

const router = express.Router();

const DeathReportController = require('../controllers/deathReport.controller')
router.get('/',DeathReportController.GetDeathReport)
module.exports = router;