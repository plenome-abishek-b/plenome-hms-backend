const express = require('express');

const router = express.Router();

const list_itemController = require('../controllers/item.controller');
router.get('/',list_itemController.getitem);
router.post('/',list_itemController.createitem);

module.exports = router;