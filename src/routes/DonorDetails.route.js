const express = require('express');

const router = express.Router();

const DonorDetailsController = require('../controllers/DonorDetails.controller')
router.get('/',DonorDetailsController.getDonorDetails)
router.post('/',DonorDetailsController.createDonorDetails)
module.exports = router;