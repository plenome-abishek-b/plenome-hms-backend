const express = require('express');

const router = express.Router();

const bloodComponentIssueController = require('../controllers/bloodComponentIssue.controller');
router.post('/',bloodComponentIssueController.createComponent);
router.get('/',bloodComponentIssueController.getComponent)
module.exports = router;