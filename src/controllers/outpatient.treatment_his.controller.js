const TreatmentHistoryModel = require('../models/outpatient.treatment_his.model');




//get patients lab_investigation list

exports.getTreatmentHistory = (req,res)=>{
    //console.log('Here all patients list');
    TreatmentHistoryModel.getTreatmentHistory((err,patients)=>{
     console.log('We are here');
     if(err)
         res.send(err);
         console.log('Patients',patients)
         res.send(patients);
     
    })
 }