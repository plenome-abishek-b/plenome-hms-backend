const express = require('express');

const router = express.Router();

const PrefixSettingController = require('../controllers/PrefixSetting.controller')
router.get('/',PrefixSettingController.getPrefixSettings)
router.put('/',PrefixSettingController.updatePrefixSettings)
module.exports = router