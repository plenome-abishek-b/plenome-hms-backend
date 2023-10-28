const express = require('express');

const router = express.Router();
const operationController = require('../controllers/operation.controller');
router.post('/',operationController.createOperation);
router.get('/',operationController.getOperation);
module.exports = router;