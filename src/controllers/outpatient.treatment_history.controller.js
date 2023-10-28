const OutPatientTreatmentHistoryModel = require('../models/outpatient.treatment_history.model');




//get patients treatment history list

exports.getAllOutPatientTreatmentHistory = (req,res)=>{
    //console.log('Here all patients list');
    OutPatientTreatmentHistoryModel.getAllOutPatientTreatmentHistory((err,patients)=>{
     console.log('We are here');
     if(err)
         res.send(err);
         console.log('Patients',patients)
         res.send(patients);
     
    })
 }