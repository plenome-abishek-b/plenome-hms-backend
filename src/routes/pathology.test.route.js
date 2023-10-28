const express = require('express');

const router = express.Router();
const list_pathology_test_controller = require('../controllers/pathology.test.controller');
router.get('/',list_pathology_test_controller.getpathologytest);
router.post('/',list_pathology_test_controller.createpathology);
module.exports = router;