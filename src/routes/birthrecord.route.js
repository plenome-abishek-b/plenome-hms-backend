const express = require('express');

const router = express.Router();

const birthrecord_controller = require('../controllers/birthrecord.controller');
router.get('/',birthrecord_controller.getbirthrecord);
router.post('/',birthrecord_controller.createbirthrecord);
router.get('/:child_name',birthrecord_controller.getrecordByname);

module.exports = router;