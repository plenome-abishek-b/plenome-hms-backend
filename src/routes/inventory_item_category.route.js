const express = require('express');

const router = express.Router();
const item_categoryController = require('../controllers/inventory_item_category.controller');
router.get('/',item_categoryController.getitem_category);
router.post('/',item_categoryController.createitem_category);

module.exports = router;