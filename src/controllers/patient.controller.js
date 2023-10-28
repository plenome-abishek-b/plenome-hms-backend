const PatientModel = require('../models/patient.model');
exports.getPatient = (req,res)=>{
    PatientModel.getPatient ((err,patient)=>{
        if(err)
        res.send(err);
     
        console.log('patient ',patient);
        res.send(patient);
    })
}

exports.getPatientById = (req,res) =>{
    console.log('get patient by id');
    PatientModel.getPatientById(req.params.id,(err, patient)=>{
         
        if(err)
            res.send(err);
           
            console.log('Single patient',patient);
            res.send(patient[0]);
        })
}

exports.createPatient =(req,res)=>{
    const patientData = new PatientModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        PatientModel.createPatient(patientData,(err,patient)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' medication added successfully',data:patient.insertId});

        })
    }
}