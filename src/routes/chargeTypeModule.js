const express = require('express');

const router = express.Router();

const chargeTypeModuleController = require('../controllers/chargeTypeModule.controller');

router.get('/',chargeTypeModuleController.getModule);
router.post('/',chargeTypeModuleController.createModule);
module.exports = router;