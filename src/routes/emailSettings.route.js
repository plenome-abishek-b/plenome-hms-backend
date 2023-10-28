const express = require('express');

const router = express.Router();

const EmailSettingController = require('../controllers/emailSettings.controller')
router.get('/',EmailSettingController.getEmailSetting)
router.post('/',EmailSettingController.createEmailSetting)
router.put('/',EmailSettingController.updateBedList)
module.exports = router