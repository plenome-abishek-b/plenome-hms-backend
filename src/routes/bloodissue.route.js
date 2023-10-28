const express = require('express');

const router = express.Router();
const bloodissueController = require('../controllers/bloodissue.controller');
router.post('/',bloodissueController.createBloodissue);
router.get('/',bloodissueController.getBloodissue);
module.exports = router;