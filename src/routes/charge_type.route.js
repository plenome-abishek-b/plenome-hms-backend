const express = require('express');

const router = express.Router();

const charge_typecontroller = require('../controllers/charge_type.controller');
router.get('/',charge_typecontroller.getcharge);

module.exports = router;