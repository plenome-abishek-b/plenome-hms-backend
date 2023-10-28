const express = require('express');

const router = express.Router();

const IncomeHeadController = require('../controllers/incomeHead.controller');
router.get('/',IncomeHeadController.getIncomeHead)
module.exports = router;