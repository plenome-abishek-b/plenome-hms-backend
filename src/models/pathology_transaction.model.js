var dbconn = require('../../config/db.config');
var pathologyTransaction = function (bill){
    this.id = bill.id;
    this.type = bill.type;
    this.section = bill.section;
    this.patient_id = bill.patient_id;
    this.case_reference_id = bill.case_reference_id;
    this.pathology_billing_id = bill.pathology_billing_id;
    this.amount = bill.amount;
     this.payment_mode = bill.payment_mode;
    this.cheque_no = bill.cheque_no;
    this.cheque_date = bill.cheque_date;
    // this.blood_issue_id = bill.blood_issue_id;
    this.payment_date = bill.payment_date;
    this.note = bill.note;
    this.received_by = bill.received_by;
   // this.created_at = bill.created_at;
}



pathologyTransaction.createTransaction =function(transactionData,result){
    dbconn.query('insert into transactions SET ?',transactionData,(err,res)=>{
        if(err){
            console.log(err)
            console.log('error while inserting data');
            result(null,err);
        }else{
            console.log('transaction data insered successfully');
            result(null,res)
        }
    });
};

module.exports = pathologyTransaction;