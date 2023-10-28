const FrontOfficeVisitorsBookModel = require('../models/frontoffice.visitors_book.model');




//Add new visitors details

exports.createVisitorsBook = (req,res) => {
const patientReqData = new FrontOfficeVisitorsBookModel(req.body);
console.log('patientReqData',patientReqData)
//check null
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
res.send(400).send({success: false,message: 'please fill all fields'});
}else{
    FrontOfficeVisitorsBookModel.createVisitorsBook(patientReqData,(err,patient)=>{
if(err)
    res.send(err);
    res.json({status: true,message: 'Visitors details created successfully',data: patient.insertId});

    })
}
}


 //get visitors detail list

exports.getVisitorsBookList = (req,res)=>{
    //console.log('Here all patients list');
    FrontOfficeVisitorsBookModel.getVisitorsBookList((err,patients)=>{
     console.log('We are here');
     if(err)
         res.send(err);
         console.log('Patients',patients)
         res.send(patients);
     
    })
 }