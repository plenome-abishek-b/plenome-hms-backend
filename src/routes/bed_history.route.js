const express = require('express');

const router = express.Router();

const bed_history_controller = require('../controllers/bed_history.controller');
router.get('/',bed_history_controller.get_bed_history);
module.exports = router;