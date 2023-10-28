const chargeModel = require('../models/setupcharge.model')


exports.createCharge= (req,res)=>{
    const chargeData = new chargeModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        chargeModel.createCharge (chargeData,(err,charge)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' charge category added successfully',data:charge.insertId});

        })
    }
}
exports.getCharge= (req,res)=>{
    chargeModel.getCharge ((err,charge)=>{
        if(err)
        res.send(err);
     
        console.log('charge ',charge);
        res.send(charge);
    })
}