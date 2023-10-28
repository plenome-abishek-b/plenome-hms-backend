const express = require('express');

const router = express.Router();

const OperationCategoryController = require('../controllers/operationCategory.controller');
router.get('/',OperationCategoryController.getCategory)
module.exports =router;