const express = require('express');

const router = express.Router();

const TaxCategoryController = require('../controllers/taxCategory.controller');
router.get('/',TaxCategoryController.getTax);
router.post('/',TaxCategoryController.createtax);
module.exports = router;