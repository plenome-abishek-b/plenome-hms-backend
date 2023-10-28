const OutPatientOperationModel = require('../models/outpatient.operation.model');




//create new patient operation

exports.createPatientOperation = (req,res) => {
const patientReqData = new OutPatientOperationModel(req.body);
console.log('patientReqData',patientReqData)
//check null
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
res.send(400).send({success: false,message: 'please fill all fields'});
}else{
    OutPatientOperationModel.createPatientOperation(patientReqData,(err,patient)=>{
if(err)
    res.send(err);
    res.json({status: true,message: 'patient operation created successfully',data: patient.insertId});

    })
}
}


//get all patients operation list

exports.getAllOutPatientOperation = (req,res)=>{
    //console.log('Here all patients list');
    OutPatientOperationModel.getAllOutPatientOperation((err,patients)=>{
     console.log('We are here');
     if(err)
         res.send(err);
         console.log('Patients',patients)
         res.send(patients);
     
    })
 }