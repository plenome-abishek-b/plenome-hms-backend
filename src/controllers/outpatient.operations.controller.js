const OutPatientOperationsModel = require('../models/outpatient.operations.model');




//create new patient operation

exports.createPatientOperations = (req,res) => {
const patientReqData = new OutPatientOperationsModel(req.body);
console.log('patientReqData',patientReqData)
//check null
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
res.send(400).send({success: false,message: 'please fill all fields'});
}else{
    OutPatientOperationsModel.createPatientOperations(patientReqData,(err,patient)=>{
if(err)
    res.send(err);
    res.json({status: true,message: 'patient operations created successfully',data: patient.insertId});

    })
}
}


//get all patients operation list

exports.getAllOutPatientOperations = (req,res)=>{
    //console.log('Here all patients list');
    OutPatientOperationsModel.getAllOutPatientOperations((err,patients)=>{
     console.log('We are here');
     if(err)
         res.send(err);
         console.log('Patients',patients)
         res.send(patients);
     
    })
 }