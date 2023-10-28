const express = require('express');

const router = express.Router();

const DosageDurationController = require('../controllers/dosageDuration.controller');
router.get('/',DosageDurationController.getDosageDuration);
router.post('/',DosageDurationController.createDosageDuration);
module.exports = router;