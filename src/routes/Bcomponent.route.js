const express = require('express');

const router = express.Router();

const B_ComponentController = require('../controllers/Bcomponents.controller')
router.get('/',B_ComponentController.GetB_Components)
module.exports = router