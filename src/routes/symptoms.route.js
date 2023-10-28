const express = require('express');

const router = express.Router();

const SymptomsController = require('../controllers/symptoms.controller');
router.get('/',SymptomsController.getSymptoms);
module.exports = router;