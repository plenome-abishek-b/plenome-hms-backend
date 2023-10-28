const OutPatientChargesModel = require('../models/outpatient.patientcharges.model');




//create new patient charges

exports.createPatientCharges = (req,res) => {
const patientReqData = new OutPatientChargesModel(req.body);
console.log('patientReqData',patientReqData)
//check null
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
res.send(400).send({success: false,message: 'please fill all fields'});
}else{
    OutPatientChargesModel.createPatientCharges(patientReqData,(err,patient)=>{
if(err)
    res.send(err);
    res.json({status: true,message: 'patientcharges created successfully',data: patient.insertId});

    })
}
}


//get all patients charges list

exports.getAllOutPatientCharges = (req,res)=>{
    //console.log('Here all patients list');
    OutPatientChargesModel.getAllOutPatientCharges((err,patients)=>{
     console.log('We are here');
     if(err)
         res.send(err);
         console.log('Patients',patients)
         res.send(patients);
     
    })
 }