const transactionsModel = require('../models/radiologyTransaction.model')



exports.createTransaction=(req,res)=>{
    console.log(req.body,"datass")
    const transactionData = new transactionsModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        transactionsModel.createTransaction(transactionData,(err,transaction)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' transactions added successfully',data:transaction.insertId});

        })
    }

}