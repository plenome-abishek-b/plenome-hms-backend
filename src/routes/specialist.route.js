const express = require('express');

const router = express.Router();

const specialistController = require('../controllers/specialist.controller');
router.post('/',specialistController.createSpecialist);
router.get('/',specialistController.getSpecialist);
module.exports = router;