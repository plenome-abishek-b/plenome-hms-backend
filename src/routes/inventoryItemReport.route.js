const express = require('express');

const router = express.Router();

const InventoryItemReportController = require('../controllers/inventoryItemReport.controller');
router.get('/',InventoryItemReportController.GetInventoryItemReport)
module.exports = router;