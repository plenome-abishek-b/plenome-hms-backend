const FrontOfficeCallLogModel = require('../models/frontoffice.general_calllog.model');




//Add new call log details

exports.createCallLog = (req,res) => {
const patientReqData = new FrontOfficeCallLogModel(req.body);
console.log('patientReqData',patientReqData)
//check null
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
res.send(400).send({success: false,message: 'please fill all fields'});
}else{
    FrontOfficeCallLogModel.createCallLog(patientReqData,(err,patient)=>{
if(err)
    res.send(err);
    res.json({status: true,message: 'Call log details created successfully',data: patient.insertId});

    })
}
}


 //get call log detail list

exports.getCallLogList = (req,res)=>{
    //console.log('Here all patients list');
    FrontOfficeCallLogModel.getCallLogList((err,patients)=>{
     console.log('We are here');
     if(err)
         res.send(err);
         console.log('Patients',patients)
         res.send(patients);
     
    })
 }