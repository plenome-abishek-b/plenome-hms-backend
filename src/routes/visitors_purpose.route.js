const express = require('express');

const router = express.Router();

const VisitorsPurposeController = require('../controllers/visitors_purpose.controller');
router.post('/',VisitorsPurposeController.createVisitorPurpose);
router.get('/',VisitorsPurposeController.getVisitorsPurpose);
module.exports = router;