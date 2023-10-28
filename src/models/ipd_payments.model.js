var dbConn = require('../../config/db.config');
var Payments = function(payments){
this.id = payments.id;
this.type = payments.type;
this.section = payments.section;
this.patient_id = payments.patient_id;
this.case_reference_id = payments.case_reference_id;
this.opd_id = payments.opd_id;
this.ipd_id = payments.ipd_id;
this.pharmacy_bill_basic_id = payments.pharmacy_bill_basic_id;
this.pathology_billing_id = payments.pathology_billing_id;
this.radiology_billing_id = payments.radiology_billing_id;
this.blood_donor_cycle_id = payments.blood_donor_cycle_id
this.blood_issue_id = payments.blood_issue_id;
this.ambulance_call_id = payments.ambulance_call_id;
this.appointment_id = payments.appointment_id;
this.attachment = payments.attachment;
this.attachment_name = payments.attachment_name;
this.amount_type = payments.amount_type;
this.amount = payments.amount;
this.payment_mode = payments.payment_mode;
this.cheque_no = payments.cheque_no;
this.cheque_date = payments.cheque_date;
this.payment_date = payments.payment_date;
this.note = payments.note;
this.received_by = payments.received_by;
this.created_at = payments.created_at;
}

Payments.createPayment = (paymentData,result)=>{
    dbConn.query('insert into transactions SET ?',paymentData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('payment Data inserted Successfully');
            result(null,res)
        }
    });
}

let query = 'SELECT * FROM transactions';
let value=[];

Payments.setQuery=(updatedQuery,updatedValue)=>{
    query=updatedQuery;
    value=updatedValue;
}
Payments.getPayment = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('transactions fetched ');
            result(null,res);
        }
    })
}
module.exports = Payments;