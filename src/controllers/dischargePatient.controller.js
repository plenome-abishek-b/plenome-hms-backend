const discharged_patient_model = require('../models/dischargePatient.model');
exports.get_discharged_patients=(req,res)=>{
    discharged_patient_model.get_discharged_patients((err,discharged_patient)=>{
        if(err)
        res.send(err);
     
        console.log('discharged_patient ',discharged_patient);
        res.send(discharged_patient);
    })
}

exports.get_discharged_patients_by_id = (req,res)=>{

    console.log('get get_discharged_patients_by_id by id');
    discharged_patient_model.get_discharged_patient_by_id(req.params.id,(err, discharge_patients)=>{
         
        if(err)
            res.send(err);
           
            console.log('Single discharged patient',discharge_patients);
            res.send(discharge_patients[0]);
        })
}


exports.create_discharged_patients = (req,res)=>{
    const dischargedData = new discharged_patient_model(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        discharged_patient_model.create_discharged_patient(dischargedData,(err,discharge_patient)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' discharge_patient added successfully',data:discharge_patient.insertId});

        })
    }
}