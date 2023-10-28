const express = require('express');

const router = express.Router();

const slot_charge_controller = require('../controllers/slot_charges.controller');
router.get('/',slot_charge_controller.get_slot_charges);

module.exports = router;