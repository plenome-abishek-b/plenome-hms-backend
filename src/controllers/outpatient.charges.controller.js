const PatientChargesModel = require('../models/outpatient.charges.model');




//create new patient charges

exports.createCharges = (req,res) => {
const patientReqData = new PatientChargesModel(req.body);
console.log('patientReqData',patientReqData)
//check null
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
res.send(400).send({success: false,message: 'please fill all fields'});
}else{
    PatientChargesModel.createCharges(patientReqData,(err,patient)=>{
if(err)
    res.send(err);
    res.json({status: true,message: 'patient charges created successfully',data: patient.insertId});

    })
}
}


//get all patients charges list

exports.getAllPatientsCharges = (req,res)=>{
    //console.log('Here all patients list');
    PatientChargesModel.getAllPatientsCharges((err,patients)=>{
     console.log('We are here');
     if(err)
         res.send(err);
         console.log('Patients',patients)
         res.send(patients);
     
    })
 }