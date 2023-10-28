const ChargeCategoryModel = require('../models/chargeCategory.model');

exports.createCharge= (req,res)=>{
    const chargeData = new ChargeCategoryModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        ChargeCategoryModel.createCharge (chargeData,(err,charge)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' charge category added successfully',data:charge.insertId});

        })
    }
}

exports.getCharge= (req,res)=>{
    ChargeCategoryModel.getCharge ((err,chargeType)=>{
        if(err)
        res.send(err);
     
        console.log('chargeType ',chargeType);
        res.send(chargeType);
    })
}