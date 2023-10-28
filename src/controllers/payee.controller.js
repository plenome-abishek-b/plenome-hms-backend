var payeeModel = require('../models/payee.model');

exports.getPayee = (req,res)=>{
    let updatedquery = 'select * from referral_person'
    let updatedvalues = [];

    if(req.query.id){
        updatedquery = 'select * from referral_person'
        updatedvalues.push(req.query.id);
    }

    payeeModel.setvalues(updatedquery,updatedvalues);
    payeeModel.getPayee((err,payee)=>{
        if(err)
        res.send(err);

        console.log('payee is needed',payee);
        res.send(payee);
    })
}
