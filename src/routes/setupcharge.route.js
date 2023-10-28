const express = require('express');

const router = express.Router();

const ChargeController = require('../controllers/setupcharge.controller');
router.get('/',ChargeController.getCharge);
router.post('/',ChargeController.createCharge)
module.exports = router;