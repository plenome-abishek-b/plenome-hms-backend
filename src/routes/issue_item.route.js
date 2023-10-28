const express = require('express');

const router = express.Router();

const issue_itemController = require('../controllers/issue_item.controller');
router.get('/',issue_itemController.getissue_item);
router.post('/',issue_itemController.createissue_item);

module.exports = router;