const express = require('express');

const router = express.Router();

const staffCountController = require('../controllers/staffCount.controller')
router.get('/',staffCountController.getStaffCount)

module.exports = router