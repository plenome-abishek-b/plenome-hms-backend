const express = require('express');

const router = express.Router();

const PatientLoginCredentialController = require('../controllers/patientLoginCredential.controller')
router.get('/',PatientLoginCredentialController.getCredentials);
module.exports = router;