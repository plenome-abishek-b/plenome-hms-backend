const express = require('express');

const router = express.Router();

const reportController = require('../controllers/IpddischargeReport.controller');
router.get('/',reportController.getReport);
module.exports = router;