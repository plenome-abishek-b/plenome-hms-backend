const express = require('express');

const router = express.Router();

const item_supplierController = require('../controllers/inventory_item_supplier.controller');
router.get('/',item_supplierController.getitem_supplier);
router.post('/',item_supplierController.createitem_supplier);

module.exports = router;