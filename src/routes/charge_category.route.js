const express = require('express');

const router = express.Router();

const charge_categorycontroller = require('../controllers/charge_category.controller');

router.get('/',charge_categorycontroller.get_charge_category);

module.exports = router;