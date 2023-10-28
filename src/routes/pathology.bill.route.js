const express = require('express');

const router = express.Router();

const PathologybillController = require('../controllers/pathology.bill.controller');
router.get('/',PathologybillController.getpathologybilltest);

module.exports = router;