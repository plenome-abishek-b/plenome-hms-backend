const express = require('express');

const router = express.Router();

const reportController = require('../controllers/dischargeReport.controller');
router.get('/',reportController.getReport);
module.exports = router;