const FrontOfficeDispatchPostalModel = require('../models/frontoffice.dispatchpostal.model');




//Add new call log details

exports.createDispatchPostal = (req,res) => {
const patientReqData = new FrontOfficeDispatchPostalModel(req.body);
console.log('patientReqData',patientReqData)
//check null
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
res.send(400).send({success: false,message: 'please fill all fields'});
}else{
    FrontOfficeDispatchPostalModel.createDispatchPostal(patientReqData,(err,patient)=>{
if(err)
    res.send(err);
    res.json({status: true,message: 'Dispatch postal details created successfully',data: patient.insertId});

    })
}
}


 //get call log detail list

exports.getDispatchPostalList = (req,res)=>{
    //console.log('Here all patients list');
    FrontOfficeDispatchPostalModel.getDispatchPostalList((err,patients)=>{
     console.log('We are here');
     if(err)
         res.send(err);
         console.log('Patients',patients)
         res.send(patients);
     
    })
 }