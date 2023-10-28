const MedicinedosageModel = require('../models/medicine_Category.model');

exports.createMedicineDosage= (req,res)=>{
    const MedicinedosageData = new MedicinedosageModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        MedicinedosageModel.createMedicineDosage (MedicinedosageData,(err,Medicinedosage)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' Medicinedosage  added successfully',data:Medicinedosage.insertId});

        })
    }
}


exports.getMedicineDosage= (req,res)=>{
    MedicinedosageModel.getMedicineDosage ((err,Med_dosage)=>{
        if(err)
        res.send(err);
     
        console.log('Med_dosage ',Med_dosage);
        res.send(Med_dosage);
    })
}