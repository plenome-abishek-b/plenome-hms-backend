var dbConn = require('../../config/db.config');

var PharmacyTransaction = function(pharmransaction){
this.id = pharmransaction.id;
this.type = pharmransaction.type;
this.section = pharmransaction.section;
this.patient_id = pharmransaction.patient_id;
this.case_reference_id = pharmransaction.case_reference_id;
this.pharmacy_bill_basic_id = pharmransaction.pharmacy_bill_basic_id;
this.amount = pharmransaction.amount;
this.payment_mode = pharmransaction.payment_mode;
this.cheque_no = pharmransaction.cheque_no;
this.cheque_date = pharmransaction.cheque_date;
this.payment_date = pharmransaction.payment_date;
this.note = pharmransaction.note;
this.received_by = pharmransaction.received_by;
this.created_at = pharmransaction.created_at;
}
PharmacyTransaction.getTransaction = (result)=>{
    dbConn.query('select * from transactions ',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('transaction details  fetched ');
            result(null,res);
        }
    })
}


PharmacyTransaction.createTransaction= (transactionData,result)=>{
    dbConn.query('insert into transactions SET ?',transactionData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('transaction Data inserted Successfully');
            result(null,res)
        }
    
    });
}

module.exports = PharmacyTransaction;