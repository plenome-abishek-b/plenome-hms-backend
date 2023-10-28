const express = require('express');

const router = express.Router();

const AmbulancelistController = require('../controllers/ambulancecallpost.controller');

router.post('/',AmbulancelistController.createambulancelist);
module.exports = router;