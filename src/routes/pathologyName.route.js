const express = require('express');

const router = express.Router();

const PathologyNameController = require('../controllers/pathologyName.controller')
router.get('/',PathologyNameController.getPathologyName)
module.exports = router;