const express = require('express');

const router = express.Router();

const reportcontroller = require('../controllers/pathology_report.controller');
router.post('/',reportcontroller.createreport);

module.exports = router;