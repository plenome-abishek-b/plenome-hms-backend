const express = require('express');

const router = express.Router();

const DosageDetailsController = require('../controllers/dosage.controller');
router.get('/',DosageDetailsController.getDosage);
module.exports = router;