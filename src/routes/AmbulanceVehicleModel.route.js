const express = require('express');

const router = express.Router();

const AmbulanceVehicleController = require('../controllers/AmbulanceVehicelModel.controller');
router.get('/',AmbulanceVehicleController.getVehicles);
module.exports = router;