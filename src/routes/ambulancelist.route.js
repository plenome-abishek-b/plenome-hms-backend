const express = require('express');

const router = express.Router();

const AmbulancelistController = require('../controllers/ambulancelist.controller');
router.get('/',AmbulancelistController.getAmbulancelist);
// router.get('/:id',AmbulancelistController.getAmbulanceByID);
router.post('/',AmbulancelistController.createambulancelist);
module.exports = router;