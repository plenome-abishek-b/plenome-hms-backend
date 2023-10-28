const express = require('express');

const router = express.Router();

const UserStaffSettingsController = require('../controllers/userStaffSettings.controller')
router.get('/',UserStaffSettingsController.getUserStaffSettings);
router.put('/',UserStaffSettingsController.updateUserStaffSettings)
module.exports = router