const payment_methods_model = require('../models/payment_methods.model');

exports.getpayment_methods = (req,res)=>{
    let updatedquery = 'select * from payment_settings'
    let updatedvalues = [];

    payment_methods_model.setquery(updatedquery,updatedvalues)
    payment_methods_model.getpayment_methods((err,payment)=>{
        if(err)
        res.send(err);

        console.log('payment settings fetched',payment);
        res.send(payment);
    })
}

exports.createpayment_methods = (req,res)=>{
    const paymentdata = new payment_methods_model(req.body);

    if(req.body.constructor === Object && Object(req.body).length ===0){
        res.send({success:false,message:'fill the details'});
    }else{
        payment_methods_model.createpayment_methods(paymentdata,(err,payment)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'payment settings added successfully',data:payment.insertId});

        })
    }
}

exports.updatedpayment_methods = (req,res)=>{
    let updatedquery = '';
    let updatedvalues = []

    if(req.query.id){
        updatedquery = 'update payment_settings SET? where id = ?'
        updatedvalues.push(req.query.id)
    }

    payment_methods_model.setquery(updatedquery,updatedvalues)
    const paymentdata = new payment_methods_model(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.send({success:false,message:'fill the details'});

    }else{
        payment_methods_model.updatedpayment_methods(paymentdata,(err,payment)=>{
            if(err){
                res.send(err);
            }else{
                if(paymentdata.id == updatedvalues[0]){
                    res.json({status:true,message:'payment settings updated successfully',data:paymentdata.id});

                }else{
                    res.json({status:false,message:'post value and id should be same'})
                }
            }
        })
    }
}