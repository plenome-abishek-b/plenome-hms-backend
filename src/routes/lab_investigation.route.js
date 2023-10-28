const express = require('express');

const router = express.Router();

const lab_investigation_controller = require('../controllers/ipd_lab_investigation.controller');
router.get('/',lab_investigation_controller.get_lab_investigations);
router.get('/:test_name',lab_investigation_controller.get_lab_investigations_by_name);
module.exports = router;