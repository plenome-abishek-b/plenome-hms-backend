const express = require('express');

const router = express.Router();

const InventoryIssueReportController = require('../controllers/inventoryIssueReport.controller');
router.get('/',InventoryIssueReportController.GetInventoryIssueReport)
module.exports = router;