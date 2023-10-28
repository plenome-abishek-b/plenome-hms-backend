const PatientModel = require('../models/patients.model');

exports.createPatient =(req,res)=>{
    console.log(req.body,'hiiiiii')
    const patientData = new PatientModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        PatientModel.createPatient(patientData,(err,patient)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' patients added successfully',data:patient.insertId});

        })
    }
}

exports.getpatients = (req,res)=>{
    let updatedquery = 'select *  from patients'
    let updatedvalues = [];
    if(req.query.doctor && req.query.shift && req.query.slot && req.query.date){
        updatedquery = "select * from appointment join patients on appointment.patient_id = patients.id where doctor= ? and  global_shift_id = ? and shift_id = ? and  date(date) = ? "
        // updatedquery = "select * from patients where doctor= ? and where shift = ? and where slot = ? and where date = ? "

        updatedvalues.push(req.query.doctor,req.query.shift,req.query.slot,req.query.date)
    
    }

    PatientModel.setValues(updatedquery,updatedvalues);
    PatientModel.getpatients((err,patientpoint)=>{
        if(err)
        res.send(err);

        console.log('patient details',patientpoint);
        res.send(patientpoint);
    })
}
