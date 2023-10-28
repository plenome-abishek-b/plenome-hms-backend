const PatientTimelineModel = require('../models/outpatient.timeline.model');




//create new patient timeline

exports.createTimeline = (req,res) => {
const patientReqData = new PatientTimelineModel(req.body);
console.log('patientReqData',patientReqData)
//check null
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
res.send(400).send({success: false,message: 'please fill all fields'});
}else{
    PatientTimelineModel.createTimeline(patientReqData,(err,patient)=>{
if(err)
    res.send(err);
    res.json({status: true,message: 'patient timeline created successfully',data: patient.insertId});

    })
}
}


//get all patients timeline list

exports.getAllPatientsTimeline = (req,res)=>{
    //console.log('Here all patients list');
    PatientTimelineModel.getAllPatientsTimeline((err,patients)=>{
     console.log('We are here');
     if(err)
         res.send(err);
         console.log('Patients',patients)
         res.send(patients);
     
    })
 }