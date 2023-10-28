
const express = require('express');

const router = express.Router();

const staffcontroller = require('../controllers/userSEARCH.controller');
router.get('/',staffcontroller.getstaffdetails);
router.get('/id/:id',staffcontroller.getstaffdetailsById);
router.get('/name/:name',staffcontroller.getstaffdetailsByName);
router.get('/role/:role',staffcontroller.getstaffdetailsByRoles);
router.get('/gender/:gender',staffcontroller.getstaffdetailsBygender);
router.post('/',staffcontroller.createstaff);

module.exports = router;