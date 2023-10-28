const express = require('express');

const router = express.Router();

const BedListController = require('../controllers/bedList.controller')
router.get('/',BedListController.getBedList)
router.post('/',BedListController.createBedList)
router.put('/',BedListController.updateBedList)
module.exports = router