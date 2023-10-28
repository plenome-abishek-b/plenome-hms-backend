const express = require('express');

const router = express.Router();

const PatientQueueSlotController = require('../controllers/patientQueueSlot.controller');
router.get('/',PatientQueueSlotController.getSlot);
module.exports = router;