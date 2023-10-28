const express = require('express');

const router = express.Router();

const sms_settingsController = require('../controllers/sms_settings.controller');
router.get('/',sms_settingsController.getsms_settings);
router.post('/',sms_settingsController.createsms_settings);
router.put('/',sms_settingsController.updatesms_settings);

module.exports = router;