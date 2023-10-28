const express = require('express');

const router = express.Router();

const SymptomsTypeController = require('../controllers/symptomsType.controller')
router.get('/',SymptomsTypeController.getSymptomsType)
router.post('/',SymptomsTypeController.createSymptomsType)
module.exports = router