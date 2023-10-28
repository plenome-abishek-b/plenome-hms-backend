const express = require('express');

const router = express.Router();

const BedStatusController = require('../controllers/bedStatus.controller')
router.get('/',BedStatusController.getBedStatus)
module.exports = router