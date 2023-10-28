const express = require('express');

const router = express.Router();
const operationController = require('../controllers/ipd_operation.controller');
router.post('/',operationController.createOperation);
router.get('/',operationController.getOperation);
module.exports = router;