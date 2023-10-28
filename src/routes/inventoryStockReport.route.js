const express = require('express');

const router = express.Router();

const InventoryStockReportController = require('../controllers/InventoryStockReport.controller');
router.get('/',InventoryStockReportController.getInventoryStockReport);
module.exports = router;