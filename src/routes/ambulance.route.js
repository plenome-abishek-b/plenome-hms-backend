const express = require('express');

const router = express.Router();

const AmbulanceController = require('../controllers/ambulance.controller');
router.get('/',AmbulanceController.getAmbulance);
router.get('/:id',AmbulanceController.getAmbulanceByID);
// router.post('/',PatientController.createPatient);
module.exports = router;