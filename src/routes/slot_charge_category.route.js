const express = require('express');

const router = express.Router();

const charge_categoryController = require('../controllers/slot_charge_category.controller');
router.get('/',charge_categoryController.getslot_charge_category);

module.exports = router;