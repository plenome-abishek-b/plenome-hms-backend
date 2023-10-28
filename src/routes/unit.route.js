const express = require('express');

const router = express.Router();

const unitcontroller = require('../controllers/unit.controller');
router.get('/',unitcontroller.getunit);
router.post('/',unitcontroller.createunit);

module.exports = router;