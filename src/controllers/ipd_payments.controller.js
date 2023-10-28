const paymentsModel = require('../models/ipd_payments.model');

exports.createPayments = (req,res)=>{
    const paymentsData = new paymentsModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        paymentsModel.createPayment(paymentsData,(err,payments)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' payments added successfully',data:payments.insertId});

        })
    }

}

exports.getPayments = (req,res)=>{
let updatedQuery= 'SELECT * FROM transactions'
let updatedValue=[];

if(req.query.patientId &&req.query.section){
    updatedQuery += ' where patient_id = ? and section = ?';
    updatedValue.push(req.query.patientId);
    updatedValue.push(req.query.section);
}

    paymentsModel.setQuery(updatedQuery,updatedValue)

    paymentsModel.getPayment((err,payments)=>{
        if(err)
    res.send(err);
 
    console.log('payments ',payments);
    res.send(payments);
    })
}