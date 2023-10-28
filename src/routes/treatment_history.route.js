const express = require('express');

const router = express.Router();

const treatment_history_controller = require('../controllers/treatment_history.controller');
router.get('/',treatment_history_controller.get_treatment_history);
module.exports = router;