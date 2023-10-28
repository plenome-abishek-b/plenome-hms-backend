const express = require('express');

const router = express.Router();

const referralpayment_controller = require('../controllers/referralpayment.controller');
router.get('/',referralpayment_controller.getreferralpayment);
router.post('/',referralpayment_controller.createreferralpayment);
router.get('/:patient_id',referralpayment_controller.getreferralpaymentByname);

module.exports = router;