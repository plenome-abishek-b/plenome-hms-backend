const express = require('express');

const router = express.Router();

const radiology_prescription = require('../controllers/search_by_prescription_radiology.controller');
router.get('/',radiology_prescription.getprescription_radiology);

module.exports = router;