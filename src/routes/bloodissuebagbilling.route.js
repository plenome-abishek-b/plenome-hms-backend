const express = require('express');

const router  = express.Router();

const bag_nameController = require('../controllers/bloodissuebagbilling.controller');
router.get('/',bag_nameController.get_bag_name);

module.exports = router;