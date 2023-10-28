const express = require('express');

const router = express.Router();

const referralCategoryController = require('../controllers/referralCategory.controller');
router.get('/',referralCategoryController.getReferralCategoryName);

module.exports = router;