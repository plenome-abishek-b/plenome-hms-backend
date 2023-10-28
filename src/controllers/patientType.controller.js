var patientTypeModel = require('../models/patientType.model');

exports.getPatientType = (req,res)=>{
    let updatedquery = 'select * from referral_payment'
    let updatedvalues = [];

    if(req.query.id){
        updatedquery = 'select * from referral_payment'
        updatedvalues.push(req.query.id);
    }

    patientTypeModel.setvalues(updatedquery,updatedvalues);
    patientTypeModel.getPatientType((err,Type)=>{
        if(err)
        res.send(err);

        console.log('Type is needed',Type);
        res.send(Type);
    })
}
