const express = require('express');

const router = express.Router();

const findingController = require('../controllers/finding.controller');
router.get('/',findingController.getFinding);
module.exports = router;