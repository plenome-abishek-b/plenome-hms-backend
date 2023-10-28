const express = require('express');

const router = express.Router();

const list_item_stockcontroller = require('../controllers/list_item_stock.controller');
router.get('/',list_item_stockcontroller.getitem_stock);
router.post('/',list_item_stockcontroller.create_item_stock);

module.exports = router;