var dbconn = require('../../config/db.config');
var payment_methods = function(payment){
    this.id = payment.id;
    this.payment_type = payment.payment_type;
    this.api_username = payment.api_username;
    this.api_secret_key = payment.api_secret_key;
    this.salt = payment.salt;
    this.api_publishable_key = payment.api_publishable_key;
    this.paytm_website = payment.paytm_website;
    this.paytm_industrytype = payment.paytm_industrytype;
    this.api_password = payment.api_password;
    this.api_signature = payment.api_signature;
    this.api_email = payment.api_email;
    this.paypal_demo = payment.paypal_demo;
    this.account_no = payment.account_no;
    this.is_active = payment.is_active;
    this.created_at = payment.created_at;
}

let query = ''
let values = []
payment_methods.setquery = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}

payment_methods.getpayment_methods = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('payment methods fetched');
            result(null,res);
        }
    })
}

payment_methods.createpayment_methods = (payment_methods,result)=>{
    dbconn.query('insert into payment_settings SET ?',payment_methods,(err,res)=>{
        if(err){
            console.log('error while inserting data',err);
            result(null,err);
        }else{
            console.log('payment settings inserted successfully');
            result(null,res);
        }
    })
}

payment_methods.updatedpayment_methods = (payment_methodsupdatedata,result)=>{
    dbconn.query(query,[payment_methodsupdatedata,values],(err,res)=>{
        if(err){
            console.log(err)
            console.log('error while updating data');
            result(null,err);
        }else{
            console.log('payment settings data updated successfully');
            result(null,res);
        }

    });
}

module.exports = payment_methods;