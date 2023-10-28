const PurchaseModel = require('../models/pharmacyPurchase.model')

exports.getPurchase = (req,res)=>{
    PurchaseModel.getPurchase ((err,purchase)=>{
        if(err)
        res.send(err);
     
        console.log('purchase ',purchase);
        res.send(purchase);
    })
}
exports.createPurchase =(req,res)=>{
    const purchaseData = new PurchaseModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        PurchaseModel.createPurchase(purchaseData,(err,purchase)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' purchase added successfully',data:purchase.insertId});

        })
    }
}