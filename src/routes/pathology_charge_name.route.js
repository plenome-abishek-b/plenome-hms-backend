const express = require('express');

const router = express.Router();

const charge_namecontroller = require('../controllers/pathology_charge_name.controller');
router.get('/',charge_namecontroller.get_charge_name);

module.exports = router;