const express = require('express');

const router = express.Router();

const pathology_parametercontroller = require('../controllers/pathology_parameter.controller');
router.get('/',pathology_parametercontroller.getparameter);
router.post('/',pathology_parametercontroller.createparameter);

module.exports = router;