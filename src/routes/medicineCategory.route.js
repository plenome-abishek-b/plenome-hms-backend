const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/medicineCategory.controller');
router.get('/',categoryController.getCategory);
module.exports = router;