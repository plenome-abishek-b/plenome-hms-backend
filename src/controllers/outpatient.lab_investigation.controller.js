const OutPatientLabInvestigationModel = require('../models/outpatient.lab_investigation.model');




//get patients lab_investigation list

exports.getAllOutPatientLabInvestigation = (req,res)=>{
    //console.log('Here all patients list');
    OutPatientLabInvestigationModel.getAllOutPatientLabInvestigation((err,patients)=>{
     console.log('We are here');
     if(err)
         res.send(err);
         console.log('Patients',patients)
         res.send(patients);
     
    })
 }