const express = require('express');
const router = express.Router();

const frontOfficeRecievedPostalController = require('../controllers/frontoffice.recievedpostal.controller');



//Add new call log 

router.post('/',frontOfficeRecievedPostalController.createRecievedPostal);

//get call log detail list

router.get('/',frontOfficeRecievedPostalController.getRecievedPostalList);



module.exports = router;