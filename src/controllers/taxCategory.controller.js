const TaxCaegoryModel = require('../models/taxCategory.model');

exports.createtax= (req,res)=>{
    const taxData = new TaxCaegoryModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        TaxCaegoryModel.createTax (taxData,(err,tax)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' tax category added successfully',data:tax.insertId});

        })
    }
}

exports.getTax= (req,res)=>{
    TaxCaegoryModel.getTax ((err,UnitType)=>{
        if(err)
        res.send(err);
     
        console.log('UnitType ',UnitType);
        res.send(UnitType);
    })
}