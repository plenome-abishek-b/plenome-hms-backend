const express = require('express');

const router = express.Router();
const radiologyBillingController= require('../controllers/radiology_bill.controller');
router.post('/',radiologyBillingController.createRadiologyBilling);
router.get('/',radiologyBillingController.getRadiologyBilling);
router.put('/',radiologyBillingController.updateRadiologyBilling)
module.exports = router;