const express = require('express');

const router = express.Router();

const radiologyController = require('../controllers/radiology_controller');
router.get('/',radiologyController.getRadiology)
module.exports = router;