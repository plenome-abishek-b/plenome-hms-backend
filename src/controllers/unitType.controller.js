const UnitTypeModel = require('../models/unitType.model');

exports.createUnitType = (req,res)=>{
    const typeData = new UnitTypeModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        UnitTypeModel.createUnitType (typeData,(err,type)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' unit type added successfully',data:type.insertId});

        })
    }
}

exports.getUnitType= (req,res)=>{
    UnitTypeModel.getUnitType ((err,UnitType)=>{
        if(err)
        res.send(err);
     
        console.log('UnitType ',UnitType);
        res.send(UnitType);
    })
}