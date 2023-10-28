const express = require('express');

const router = express.Router();

const DashCalcController = require('../controllers/dashCalc.controller')
router.get('/',DashCalcController.getDashCalc)
module.exports = router