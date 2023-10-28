const express = require('express');

const router = express.Router();

const ipd_details_controller = require('../controllers/ipd_details.controller');
router.get('/',ipd_details_controller.get_ipd_details);
router.get('/id/:id',ipd_details_controller.get_ipd_details_by_id);
router.get('/patient_id/:patient_id',ipd_details_controller.get_ipd_details_by_Patient_id);
router.post('/',ipd_details_controller.create_ipd_details);
module.exports = router