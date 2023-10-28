const OutPatientMedicationModel = require('../models/outpatient.medication.model');




//create new patient medication

exports.createPatientMedication = (req,res) => {
const patientReqData = new OutPatientMedicationModel(req.body);
console.log('patientReqData',patientReqData)
//check null
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
res.send(400).send({success: false,message: 'please fill all fields'});
}else{
    OutPatientMedicationModel.createPatientMedication(patientReqData,(err,patient)=>{
if(err)
    res.send(err);
    res.json({status: true,message: 'patientmedication created successfully',data: patient.insertId});

    })
}
}


//get all patients charges list

exports.getAllOutPatientMedication = (req,res)=>{
    //console.log('Here all patients list');
    OutPatientMedicationModel.getAllOutPatientMedication((err,patients)=>{
     console.log('We are here');
     if(err)
         res.send(err);
         console.log('Patients',patients)
         res.send(patients);
     
    })
 }