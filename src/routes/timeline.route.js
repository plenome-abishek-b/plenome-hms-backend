const express = require('express');

const router = express.Router();
const timelineController = require('../controllers/timeline.controller');
router.post('/',timelineController.createTimeline);
router.get('/',timelineController.getTimeline);
module.exports=router;