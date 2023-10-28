const express = require('express');

const router = express.Router();

const OperationNameController = require('../controllers/operationName.controller');
router.get('/',OperationNameController.getName)
module.exports =router;