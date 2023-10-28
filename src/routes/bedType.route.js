const express = require('express');

const router = express.Router();

const BedTypeController = require('../controllers/bedType.controller')
router.get('/',BedTypeController.getBedType)
router.post('/',BedTypeController.createBedType)
module.exports = router