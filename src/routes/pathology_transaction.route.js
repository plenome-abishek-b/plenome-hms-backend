const express = require('express');

const router = express.Router();

const transist = require('../controllers/pathology_transaction.controller');
router.post('/',transist.create_transaction);

module.exports = router;