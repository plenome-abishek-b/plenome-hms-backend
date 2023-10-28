const express = require('express');

const router = express.Router();

const BatchNoController = require('../controllers/batchNo.controller');
router.get('/',BatchNoController.getName);
module.exports = router;