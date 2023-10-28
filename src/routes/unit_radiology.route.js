const express = require('express');

const router = express.Router();

const unit_radiologyController = require('../controllers/unit_radiology.controller');
router.get('/',unit_radiologyController.getunit);
router.post('/',unit_radiologyController.createunit);

module.exports = router;