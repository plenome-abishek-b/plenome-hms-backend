const express = require('express');

const router = express.Router();
const sourceController = require('../controllers/source.controller');
router.post('/',sourceController.createSource);
router.get('/',sourceController.getSource);
module.exports = router;
