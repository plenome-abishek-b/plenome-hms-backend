const express = require('express');

const router = express.Router();

const findingCategoryController = require('../controllers/findingCategory.controller');
router.get('/',findingCategoryController.getFindingCategory)
module.exports = router;