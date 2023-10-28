const express = require('express');

const router = express.Router();

const category_namecontroller = require('../controllers/category_name.controller');
router.get('/',category_namecontroller.get_category_name);

module.exports = router;