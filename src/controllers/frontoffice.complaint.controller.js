const FrontOfficeComplaintModel = require('../models/frontoffice.complaint.model');




//Add new complaint details

exports.createComplaint = (req,res) => {
const patientReqData = new FrontOfficeComplaintModel(req.body);
console.log('patientReqData',patientReqData)
//check null
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
res.send(400).send({success: false,message: 'please fill all fields'});
}else{
    FrontOfficeComplaintModel.createComplaint(patientReqData,(err,patient)=>{
if(err)
    res.send(err);
    res.json({status: true,message: 'Complaint details created successfully',data: patient.insertId});

    })
}
}


 //get complaint detail list

exports.getComplaintList = (req,res)=>{
    //console.log('Here all patients list');
    FrontOfficeComplaintModel.getComplaintList((err,patients)=>{
     console.log('We are here');
     if(err)
         res.send(err);
         console.log('Patients',patients)
         res.send(patients);
     
    })
 }