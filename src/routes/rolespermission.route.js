const express = require('express');

const router = express.Router();

const RolespermissionController = require('../controllers/rolespermission.controller');
router.get('/',RolespermissionController.getRolespermissionlist);
// router.get('/:id',RolespermissionController.getAmbulanceByID);
// router.post('/',RolespermissionController.createambulancelist);
module.exports = router;