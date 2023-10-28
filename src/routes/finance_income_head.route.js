const express = require('express');

const router = express.Router();

const income_headController = require('../controllers/finance_income_head.controller');
router.get('/',income_headController.getincome_head);
router.post('/',income_headController.createincome_head);

module.exports = router;