const OutPatientLiveConsultationModel = require('../models/outpatient.live_consultation.model');




//get patients live consultation list

exports.getAllOutPatientLiveConsultation = (req,res)=>{
    //console.log('Here all patients list');
    OutPatientLiveConsultationModel.getAllOutPatientLiveConsultation((err,patients)=>{
     console.log('We are here');
     if(err)
         res.send(err);
         console.log('Patients',patients)
         res.send(patients);
     
    })
 }