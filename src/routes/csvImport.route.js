const express = require('express');

const router = express.Router();

const CSVController = require('../controllers/csvImport.controller');
router.post('/',CSVController.createCSV);
module.exports = router;