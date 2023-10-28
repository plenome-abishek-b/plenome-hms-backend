const PrescriptionTestModel = require('../models/prescriptionTest.model');
exports.getPrescriptionTest = (req,res)=>{
    PrescriptionTestModel.getPrescriptionTest((err,prescriptionTest)=>{
        if(err)
        res.send(err);
     
        console.log('prescriptionTest ',prescriptionTest);
        res.send(prescriptionTest);
    
    })
}

exports.createPrescriptionTest = (req,res)=>{
    const prescriptionData = new PrescriptionTestModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        PrescriptionTestModel.createPrescriptionTest(prescriptionData,(err,prescriptionBasic)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' Prescription Test  added successfully',data:prescriptionBasic.insertId});

        })
    }
}