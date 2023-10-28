const express = require('express');

const router = express.Router();

const certificateController = require('../controllers/certificate_overview.controller');
router.get('/',certificateController.getcertificate);

module.exports = router;