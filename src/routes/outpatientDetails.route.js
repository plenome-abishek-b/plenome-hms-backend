const express = require('express');

const router = express.Router();
const opdController = require('../controllers/outpatientDetails.controller');
router.post('/',opdController.createOutpatients);
router.get('/',opdController.getOutpatients);
module.exports = router;