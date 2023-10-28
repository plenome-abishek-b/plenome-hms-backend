const express = require('express');

const router = express.Router();
const complaintTypeController = require('../controllers/complainType.controller');
router.post('/',complaintTypeController.createComplaintType);
router.get('/',complaintTypeController.getComplaintType);
module.exports = router;