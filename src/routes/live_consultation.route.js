const express = require('express');

const router = express.Router();

const live_consultation_controller = require('../controllers/live_consultation.controller')
router.get('/',live_consultation_controller.get_live_consultation);
router.get('/:consultation_title',live_consultation_controller.get_live_consultation_by_title);
module.exports = router;