const DosageDurationModel = require('../models/dosageDuration.model');

exports.createDosageDuration= (req,res)=>{
    const dosageDurationData = new DosageDurationModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        DosageDurationModel.createDosageDuration (dosageDurationData,(err,dosageDuration)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' dosageDuration  added successfully',data:dosageDuration.insertId});

        })
    }
}

exports.getDosageDuration= (req,res)=>{
    DosageDurationModel.getDosageDuration ((err,duration)=>{
        if(err)
        res.send(err);
     
        console.log('duration ',duration);
        res.send(duration);
    })
}