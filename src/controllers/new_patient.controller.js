const PatientModel = require('../models/new_patient.model');
exports.getPatient = (req,res)=>{

let updatedQuery = 'select * from patients '
let updatedValue = [];

if(req.query.search){
    updatedQuery= 'select * from patients where id like ? or patient_name like ?'
    updatedValue.push('%'+req.query.search +'%');
    updatedValue.push('%'+req.query.search +'%');

    
}

    PatientModel.setQuery(updatedQuery,updatedValue);
    PatientModel.getPatient ((err,patient)=>{
        console.log(updatedQuery);
        if(err)
        res.send(err);
     
        console.log('patient ',patient);
        res.send(patient);
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