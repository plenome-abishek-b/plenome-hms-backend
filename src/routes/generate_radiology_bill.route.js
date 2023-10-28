const express = require('express');

const router = express.Router();

const generate_radiologycontroller = require('../controllers/generate_radiology_bill.controller');
router.get('/',generate_radiologycontroller.getradiology);
router.post('/',generate_radiologycontroller.createradiology);

module.exports = router;