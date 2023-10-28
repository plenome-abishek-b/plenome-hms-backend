var dbConn = require('../../config/db.config');

var Referral_payment = function(referralpayment){
    this.id = referralpayment.id;
    this.referral_person_id = referralpayment.referral_person_id;
    this.patient_id = referralpayment.patient_id;
    this.referral_type = referralpayment.referral_type;
    this.billing_id = referralpayment.billing_id;
    this.bill_amount = referralpayment.bill_amount;
    this.percentage = referralpayment.percentage;
    this.amount = referralpayment.amount;
    this.date = referralpayment.date;
    
    }


//GET THE RECORD

Referral_payment.getreferralpayment = (result)=>{
    dbConn.query(`SELECT rp1.name AS referral_person_name, CONCAT(p.patient_name, ' (', rp.patient_id, ')') AS \`Patient name\`, rp.id AS Bill_No, rp.bill_amount, rp.percentage AS commission_percentage, rp.amount AS commission_amount_fixed FROM referral_payment rp LEFT JOIN referral_person rp1 ON rp.referral_person_id = rp1.id LEFT JOIN patients p ON rp.patient_id = p.id `,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('referralpayment details fetched');
            result(null,res);
        }
    })  
}


//POST THE RECORD

Referral_payment.createreferralpayment = (referraldata,result)=>{
    dbConn.query('insert into referral_payment SET ?',referraldata,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('referralpayment Data inserted Successfully');
            result(null,res)
        }
    
    });
}


// SEARCH BY NAME_name

Referral_payment.getreferralpaymentByname = (patient_id,result)=>{
  dbConn.query('select * from referral_payment where patient_id = ?',[patient_id],(err,res)=>{
      if(err){
          console.log('Error occured while getting by name',err);
          result(null,err);
      }else{
          console.log('record fetched by name');
          result(null,res);
      }
})
}


module.exports = Referral_payment;