const OutPatientPaymentModel = require('../models/outpatient.payment.model');




//create new patient payment

exports.createPatientPayment = (req,res) => {
const patientReqData = new OutPatientPaymentModel(req.body);
console.log('patientReqData',patientReqData)
//check null
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
res.send(400).send({success: false,message: 'please fill all fields'});
}else{
    OutPatientPaymentModel.createPatientPayment(patientReqData,(err,patient)=>{
if(err)
    res.send(err);
    res.json({status: true,message: 'patient payment created successfully',data: patient.insertId});

    })
}
}


//get all patients payment list

exports.getAllOutPatientPayment = (req,res)=>{
    //console.log('Here all patients list');
    OutPatientPaymentModel.getAllOutPatientPayment((err,patients)=>{
     console.log('We are here');
     if(err)
         res.send(err);
         console.log('Patients',patients)
         res.send(patients);
     
    })
 }