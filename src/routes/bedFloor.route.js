const express = require('express');

const router = express.Router();

const BedFloorController = require('../controllers/bedFloor.controller')
router.get('/',BedFloorController.getBedFloor)
router.post('/',BedFloorController.createBedFloor)
module.exports = router