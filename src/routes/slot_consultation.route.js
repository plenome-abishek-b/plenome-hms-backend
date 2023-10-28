const express = require('express');

const router = express.Router();

const slot_consultationController = require('../controllers/slot_consultation.controller');
router.get('/',slot_consultationController.getconsultation);

module.exports = router;