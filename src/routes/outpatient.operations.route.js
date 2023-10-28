const express = require('express');
const router = express.Router();

const outPatientOperationsController = require('../controllers/outpatient.operations.controller');



//create new patient operation

router.post('/',outPatientOperationsController.createPatientOperations);

//get all patients operation list

router.get('/',outPatientOperationsController.getAllOutPatientOperations);



module.exports = router;