const express = require('express');

const router = express.Router();

const issue_tocontroller = require('../controllers/inventory_issue_to.controller');
router.get('/',issue_tocontroller.getissue_to);

module.exports = router;