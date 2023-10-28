const express = require('express');

const router = express.Router();

const BedGroupController = require('../controllers/bedGroup.controller')
router.get('/',BedGroupController.getBedGroup)
router.post('/',BedGroupController.createBedGroup)
module.exports = router