const express = require('express');
const router = express.Router();

const outPatientOperationController = require('../controllers/outpatient.operation.controller');



//create new patient operation

router.post('/',outPatientOperationController.createPatientOperation);

//get all patients operation list

router.get('/',outPatientOperationController.getAllOutPatientOperation);



module.exports = router;