const express = require('express');

const router = express.Router();

const BillBasicController = require('../controllers/pharmacyBillBasic.controller');
router.get('/',BillBasicController.getBills);
router.post('/',BillBasicController.createBills);
module.exports = router;