const FrontOfficeRecievedPostalModel = require('../models/frontoffice.recievedpostal.model');




//Add new call log details

exports.createRecievedPostal = (req,res) => {
const patientReqData = new FrontOfficeRecievedPostalModel(req.body);
console.log('patientReqData',patientReqData)
//check null
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
res.send(400).send({success: false,message: 'please fill all fields'});
}else{
    FrontOfficeRecievedPostalModel.createRecievedPostal(patientReqData,(err,patient)=>{
if(err)
    res.send(err);
    res.json({status: true,message: 'Recieved postal details created successfully',data: patient.insertId});

    })
}
}


 //get call log detail list

exports.getRecievedPostalList = (req,res)=>{
    //console.log('Here all patients list');
    FrontOfficeRecievedPostalModel.getRecievedPostalList((err,patients)=>{
     console.log('We are here');
     if(err)
         res.send(err);
         console.log('Patients',patients)
         res.send(patients);
     
    })
 }