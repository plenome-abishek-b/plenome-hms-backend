const express = require('express');

const router = express.Router();

const ChargeTypeController = require('../controllers/chargeType.controller');
router.post('/',ChargeTypeController.createChargeType);
router.get('/',ChargeTypeController.getChargeType);
module.exports = router;