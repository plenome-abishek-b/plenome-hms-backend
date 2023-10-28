const ChargeTypeModel = require('../models/chargeType.model');


exports.createChargeType = (req,res)=>{
    const typeData = new ChargeTypeModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        ChargeTypeModel.createChargeType (typeData,(err,type)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' charge type added successfully',data:type.insertId});

        })
    }
}

exports.getChargeType= (req,res)=>{
    ChargeTypeModel.getChargeType ((err,ChargeType)=>{
        if(err)
        res.send(err);
     
        console.log('ChargeType ',ChargeType);
        res.send(ChargeType);
    })
}