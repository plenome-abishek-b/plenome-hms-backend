const express = require('express');
const router = express.Router();

const frontOfficeDispatchPostalController = require('../controllers/frontoffice.dispatchpostal.controller');



//Add new call log 

router.post('/',frontOfficeDispatchPostalController.createDispatchPostal);

//get call log detail list

router.get('/',frontOfficeDispatchPostalController.getDispatchPostalList);



module.exports = router;