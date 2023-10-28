const express = require('express');

const router = express.Router();

const user_typecontroller = require('../controllers/inventory_user_type.controller');
router.get('/',user_typecontroller.getuser_type);

module.exports = router;