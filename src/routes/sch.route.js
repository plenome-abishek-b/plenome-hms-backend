const express = require('express');

const router = express.Router();

const schcontroller = require('../controllers/sch.controller');
router.get('/',schcontroller.getschdetails);
router.post('/',schcontroller.createschdetails);
module.exports = router;