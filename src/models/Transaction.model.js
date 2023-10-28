var dbConn = require('../../config/db.config');


var Transaction = function(transactions){
    this.id = transactions.id;
    this.type = transactions.type;
    this.section = transactions.section;
    this.patient_id = transactions.patient_id;
    this.case_reference_id = transactions.case_reference_id;
    this.pharmacy_bill_basic_id = transactions.pharmacy_bill_basic_id;
    this.pathology_billing_id = transactions.pathology_billing_id;
    this.blood_donor_cycle_id = transactions.blood_donor_cycle_id;
    this.blood_issue_id = transactions.blood_issue_id;
    this.ambulance_call_id = transactions.ambulance_call_id;
    this.appointment_id = transactions.appointment_id;
    this.attachment = transactions.attachment;
    this.attachment_name = transactions.attachment_name;
    this.amount_type = transactions.amount_type;
    this.radiology_billing_id = transactions.radiology_billing_id;  
    this.amount = transactions.amount;
    this.payment_mode = transactions.payment_mode;
    this.cheque_no = transactions.cheque_no;
    this.cheque_date = transactions.cheque_date;
    this.opd_id = transactions.opd_id;
    this.ipd_id = transactions.ipd_id;
    this.payment_date = transactions.payment_date;
    this.note = transactions.note;
    this.received_by = transactions.received_by;
    this.created_at = transactions.created_at;
    }
    Transaction.createTransaction= (transactionData,result)=>{
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
    module.exports = Transaction;