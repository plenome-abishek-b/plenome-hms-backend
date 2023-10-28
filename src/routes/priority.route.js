const express = require('express');

const router = express.Router();
const priorityController = require('../controllers/priority.controller');
router.post('/',priorityController.createPriority);
router.get('/',priorityController.getPriority);
module.exports = router;