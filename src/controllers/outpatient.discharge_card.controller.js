const DischargedPatientModel = require('../models/outpatient.discharge_card.model');


//get all discharged patients list

exports.getAllDischargedPatients = (req,res)=>{
   //console.log('Here all patients list');
   DischargedPatientModel.getAllDischargedPatients((err,patients)=>{
    console.log('We are here');
    if(err)
        res.send(err);
        console.log('Patients',patients)
        res.send(patients);
    
   })
}

//get discharged patient profile by OPD ID

exports.getDischargedPatientByID = (req,res) =>{
//console.log('get patient by ID');
DischargedPatientModel.getDischargedPatientByID(req.params.opd_details_id,(err,patients)=>{
    if(err)
        res.send(err);
        console.log('single patient data',patients)
        res.send(patients[0]);
    
   })
}



//get discharged patient list by Doctor EMP ID

exports.getDischargedPatientByDoctorID = (req,res) =>{
    //console.log('get patient by ID');
    DischargedPatientModel.getDischargedPatientByDoctorID(req.params.discharge_by,(err,patients)=>{
        if(err)
            res.send(err);
            console.log('single patient data',patients)
            res.send(patients[0]);
        
       })
    }








