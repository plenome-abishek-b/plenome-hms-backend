const PrescriptionBasicModel = require('../models/prescriptionBasic.model');
exports.getPrescription = (req,res)=>{
    PrescriptionBasicModel.getPrescriptionBasic((err,prescriptionBasic)=>{
        if(err)
        res.send(err);
     
        console.log('prescriptionBasic ',prescriptionBasic);
        res.send(prescriptionBasic);
    
    })
}

exports.getPrescriptionBasicById = (req,res) =>{
    PrescriptionBasicModel.getPrescriptionBasicById(req.params.id,(err,prescriptionBasic)=>{
        if(err)
        res.send(err);
       
        console.log('Single prescriptionBasic',prescriptionBasic);
        res.send(prescriptionBasic[0]);
})
}

exports.createPrescription = (req,res)=>{
    const prescriptionData = new PrescriptionBasicModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        PrescriptionBasicModel.createPrescriptionBasic(prescriptionData,(err,prescriptionBasic)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' prescriptionBasic added successfully',data:prescriptionBasic.insertId});

        })
    }
}