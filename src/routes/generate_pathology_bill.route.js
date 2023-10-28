const express = require('express');

const router = express.Router();

const generate_pathologyController = require('../controllers/generate_pathology_bill.controller');
router.get('/',generate_pathologyController.getpathology);
router.post('/',generate_pathologyController.createpathology);
module.exports = router;