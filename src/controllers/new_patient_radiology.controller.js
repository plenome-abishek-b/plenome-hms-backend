const patientmodel = require('../models/new_patient_radiology.model');
exports.getpatient = (req,res)=>{

    let updatedQuery = 'select * from patients'
    let updatedvalue = [];

    if(req.query.search){
        updatedQuery = 'select * from patients where id like ? or patient_name like ?'
        updatedvalue.push('%'+req.query.search+'%');
        updatedvalue.push('%'+req.query.search+'%');
   
    }

    patientmodel.setQuery(updatedQuery,updatedvalue);
    patientmodel.getpatient ((err,patient)=>{
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
            res.json({status:true,message:' data added successfully',data:patient.insertId});

        })
    }
}
