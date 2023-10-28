const OutPatientOpdDetailsModel = require('../models/outpatient.opd_details.model');




//get patients Opd Details overview

exports.getOpdDetailsOverview = (req,res)=>{
    // console.log(req, 'req of getOpd')
    //console.log('Here all patients list');
    OutPatientOpdDetailsModel.getOpdDetailsOverview((err,patients)=>{
     console.log('We are here');
     if(err)
         res.send(err);
         console.log('Patients',patients)
         res.send(patients);
    })
 }

 //create new outpatient

exports.createOutPatient = (req,res) => {
    console.log(req.body,'huhuhuhhuhu');
    const patientReqData = new OutPatientOpdDetailsModel(req.body);
    // console.log('patientReqData',patientReqData)
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.send(400).send({success: false,message: 'please fill all fields'});
    }else{
        OutPatientOpdDetailsModel.createOutPatient(patientReqData,(err,patient)=>{
    if(err)
        res.send(err);
        console.log(err,'error da ')
        res.json({status: true,message: 'outpatient created successfully',data: patient.insertId});
    
        })
    }
    }