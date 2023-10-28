const express = require('express');

const router = express.Router();

const PathologyCategoryController = require('../controllers/pathologyCategory.controller')
router.get('/',PathologyCategoryController.getPathoCategory)
module.exports = router;