const express = require('express');

const router = express.Router();

const discharged_patient_controller = require('../controllers/dischargePatient.controller');
router.get('/',discharged_patient_controller.get_discharged_patients);
router.get('/:id',discharged_patient_controller.get_discharged_patients_by_id);
router.post('/',discharged_patient_controller.create_discharged_patients);
module.exports = router;