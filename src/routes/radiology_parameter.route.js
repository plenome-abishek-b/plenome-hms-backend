const express = require('express');

const router = express.Router();

const radio_parameterController = require('../controllers/radiology_parameter.controller');
router.get('/',radio_parameterController.getparameter);
router.post('/',radio_parameterController.createparameter);

module.exports = router;