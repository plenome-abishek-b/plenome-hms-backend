const express = require('express');

const router = express.Router();

const prescription = require('../controllers/search_by_prescription.controller');
router.get('/',prescription.getprescription);

module.exports = router;