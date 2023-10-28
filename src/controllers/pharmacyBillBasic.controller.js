const BillBasicModel = require('../models/pharmacyBillBasic.model');

exports.getBills = (req,res)=>{
    BillBasicModel.getBills ((err,med)=>{
        if(err)
        res.send(err);
     
        console.log('pharmacy bills ',med);
        res.send(med);
    })

}
    exports.createBills =(req,res)=>{
        const billData = new BillBasicModel(req.body);
        if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
            res.send({success:false,message:'please fill all fields'});
        }else{
            BillBasicModel.createBills(billData,(err,bill)=>{
                if(err)
                res.send(err);
                res.json({status:true,message:' purchase added successfully',data:bill.insertId});
    
            })
        }

}
