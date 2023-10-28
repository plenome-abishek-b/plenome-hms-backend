const express = require('express');

const router = express.Router();

const RadiologyNameController = require('../controllers/radiologyName.controller')
router.get('/',RadiologyNameController.getRadiologyName)
module.exports = router;