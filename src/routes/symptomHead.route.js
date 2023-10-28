const express = require('express');

const router = express.Router();

const SymptomsHeadController = require('../controllers/symptomHead.controller')
router.get('/',SymptomsHeadController.getSymptomsHead)
router.post('/',SymptomsHeadController.createSymptomsHead)
module.exports = router