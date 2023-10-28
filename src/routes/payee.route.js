const express = require('express');

const router = express.Router();

const payeeController = require('../controllers/payee.controller');
router.get('/',payeeController.getPayee);

module.exports = router;