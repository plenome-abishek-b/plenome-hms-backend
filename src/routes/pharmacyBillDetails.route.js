const express = require('express');

const router = express.Router();

const BillDetailsController = require('../controllers/pharmacyBillDetails.controller')
router.get('/',BillDetailsController.getBillDetails);
router.post('/',BillDetailsController.createDetail)
module.exports = router;