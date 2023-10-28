const express = require('express');

const router = express.Router();

const UnitTypeController = require('../controllers/unitType.controller');
router.get('/',UnitTypeController.getUnitType);
router.post('/',UnitTypeController.createUnitType);
module.exports = router;