const express = require('express');

const router = express.Router();

const pathologyController = require('../controllers/pathology.controller');
router.get('/',pathologyController.getPathology)
module.exports = router;