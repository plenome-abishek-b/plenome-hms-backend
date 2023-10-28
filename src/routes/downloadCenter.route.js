const express = require('express');

const router = express.Router();

const contentController = require('../controllers/downloadCenter.controller');
router.get('/',contentController.getcontent);
router.post('/',contentController.createcontent);

module.exports = router;