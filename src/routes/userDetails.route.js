const express = require('express');

const router = express.Router();

const staffusercontroller = require('../controllers/userDetails.controller');
router.get('/',staffusercontroller.getstaffuserdetails);
module.exports = router;