const express = require('express');

const router = express.Router();

const FindingController = require('../controllers/findings.controller');
router.get('/',FindingController.getFindings);
module.exports = router;