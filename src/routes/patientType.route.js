const express = require('express');

const router = express.Router();

const patientTypeController = require('../controllers/patientType.controller');
router.get('/',patientTypeController.getPatientType);

module.exports = router;