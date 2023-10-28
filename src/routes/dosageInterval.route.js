const express = require('express');

const router = express.Router();

const DosageIntervalController = require('../controllers/dosageInterval.controller');
router.get('/',DosageIntervalController.getDosageInterval);
router.post('/',DosageIntervalController.createDosageInterval);
module.exports = router;