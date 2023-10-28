const express = require('express');

const router = express.Router();

const staff_rolesController = require('../controllers/rolebased.controller');
router.get('/',staff_rolesController.getstaffroles);

module.exports = router;