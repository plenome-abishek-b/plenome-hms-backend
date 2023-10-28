const DosageIntervalModel = require('../models/dosageInterval.model');

exports.createDosageInterval= (req,res)=>{
    const dosageIntervalData = new DosageIntervalModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        DosageIntervalModel.createDosageInterval (dosageIntervalData,(err,dosageInterval)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' dosageInterval category added successfully',data:dosageInterval.insertId});

        })
    }
}

exports.getDosageInterval= (req,res)=>{
    DosageIntervalModel.getDosageInterval ((err,interval)=>{
        if(err)
        res.send(err);
     
        console.log('interval ',interval);
        res.send(interval);
    })
}