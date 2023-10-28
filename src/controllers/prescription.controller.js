const PrescriptionModel = require('../models/prescription.model');
exports.getPrescription = (req,res)=>{
    PrescriptionModel.getPrescription((err,prescription)=>{
        if(err)
        res.send(err);
     
        console.log('prescription ',prescription);
        res.send(prescription);
    })
}

