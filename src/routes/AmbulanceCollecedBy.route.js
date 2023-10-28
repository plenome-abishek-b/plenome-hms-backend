const express = require('express');

const router = express.Router();

const AmbulanceCollectedByController = require('../controllers/AmbulanceCollectedBy.controller');
router.get('/',AmbulanceCollectedByController.getcollectedBy);
module.exports = router;