const TransactionModel = require('../models/pharmacyTransaction.model');

exports.getTransaction = (req,res)=>{
    TransactionModel.getTransaction ((err,med)=>{
        if(err)
        res.send(err);
     
        console.log('Transaction ',med);
        res.send(med);
    })

}


exports.createTransaction=(req,res)=>{
    const transactionData = new TransactionModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        TransactionModel.createTransaction(transactionData,(err,transaction)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' transactions added successfully',data:transaction.insertId});

        })
    }

}