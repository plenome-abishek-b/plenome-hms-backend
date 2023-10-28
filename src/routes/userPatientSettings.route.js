const express = require('express');

const router = express.Router();

const UserPatientSettingsController = require('../controllers/userPatientSettings.controller')
router.get('/',UserPatientSettingsController.getUserPatientSettings)
router.put('/',UserPatientSettingsController.updateUserPatientSettings)
module.exports = router