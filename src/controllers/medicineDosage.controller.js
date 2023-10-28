const MedicineDosageModel = require('../models/medicineDosage.model');

exports.createMedicineDosage= (req,res)=>{
    const medDosageData = new MedicineDosageModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        MedicineDosageModel.createMedDosage (medDosageData,(err,medDosage)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' medDosage  added successfully',data:medDosage.insertId});

        })
    }
}

exports.getMedicineDosage = (req,res)=>{
    MedicineDosageModel.getMedDosage ((err,medDosage)=>{
        if(err)
        res.send(err);
     
        console.log('medDosage ',medDosage);
        res.send(medDosage);
    })
}