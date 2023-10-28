const PatientVisitModel = require('../models/outpatient.visits.model');




//create new patient visits

exports.createVisits = (req,res) => {
    console.log(req.body,"bodyyyy")
const patientReqData = new PatientVisitModel(req.body);
console.log('patientReqData',patientReqData)
//check null
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
res.send(400).send({success: false,message: 'please fill all fields'});
}else{
    PatientVisitModel.createVisits(patientReqData,(err,patient)=>{
if(err)
    res.send(err);
    res.json({status: true,message: 'patient visits created successfully',data: patient.insertId});

    })
}
}


//get all patients Visits list

exports.getAllPatientsVisits = (req,res)=>{
    //console.log('Here all patients list');
    PatientVisitModel.getAllPatientsVisits((err,patients)=>{
     console.log('We are here');
     if(err)
         res.send(err);
         console.log('Patients',patients)
         res.send(patients);
     
    })
 }

