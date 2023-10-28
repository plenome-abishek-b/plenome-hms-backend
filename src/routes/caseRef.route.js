const express = require('express');

const router = express.Router();

const CaseReferenceController = require('../controllers/caseRef.controller');
router.post('/',CaseReferenceController.createCaseReference)
module.exports = router;