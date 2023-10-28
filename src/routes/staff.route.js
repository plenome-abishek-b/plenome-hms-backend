const express = require('express');

const router = express.Router();

const staffcontroller = require('../controllers/staff.controller');
router.get('/',staffcontroller.getstaffdetails);
router.get('/id/:id',staffcontroller.getstaffdetailsById);
router.get('/name/:name',staffcontroller.getstaffdetailsByName);
router.post('/',staffcontroller.createstaff);
module.exports = router;