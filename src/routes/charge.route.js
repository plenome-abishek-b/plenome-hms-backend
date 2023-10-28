const express = require('express');

const router = express.Router();
const chargeController = require('../controllers/charge.controller');
router.post('/',chargeController.createCharge);
router.get('/',chargeController.getCharge);
module.exports = router;