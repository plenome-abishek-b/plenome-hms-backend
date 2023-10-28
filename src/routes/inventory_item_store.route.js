const express = require('express');

const router = express.Router();

const item_storeController = require('../controllers/inventory_item_store.controller');
router.get('/',item_storeController.getitem_store);
router.post('/',item_storeController.createitem_store);

module.exports = router;