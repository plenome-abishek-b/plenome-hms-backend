var dbCon = require('../../config/db.config');

var PatientPayment = function(patientpayment) {
this.type = patientpayment.type;
this.section = patientpayment.section;
this.patient_id  = patientpayment.patient_id;
this.case_reference_id = patientpayment.case_reference_id;
this.opd_id = patientpayment.opd_id;
this.ipd_id = patientpayment.ipd_id;
this.pharmacy_bill_basic_id = patientpayment.pharmacy_bill_basic_id;
this.pathology_billing_id = patientpayment.pathology_billing_id;
this.radiology_billing_id = patientpayment.radiology_billing_id;
this.blood_donor_cycle_id = patientpayment.blood_donor_cycle_id;
this.blood_issue_id = patientpayment.blood_issue_id;
this.ambulance_call_id = patientpayment.ambulance_call_id;
this.appointment_id = patientpayment.appointment_id;
this.attachment = patientpayment.attachment;
this.attachment_name = patientpayment.attachment_name;
this.amount_type = patientpayment.amount_type;
this.amount = patientpayment.amount;
this.payment_mode = patientpayment.payment_mode;
this.cheque_no = patientpayment.cheque_no;
this.cheque_date = patientpayment.cheque_date;
this.payment_date = patientpayment.payment_date;
this.note = patientpayment.note;
this.received_by = patientpayment.received_by;
this.created_at = patientpayment.created_at;
}




//Add new payment

PatientPayment.createPatientPayment = (patientReqData,result) =>{
    dbCon.query('INSERT INTO transactions SET ?',patientReqData,(err,res)=>{
    if(err){
        console.log('Error while inserting data');
        console.log(err);
        result(null,err);
    }
    else{
        console.log('Patient payment created successfully')
        result(null,res);
    }
    })
    }


    //get all patients payment list

    PatientPayment.getAllOutPatientPayment = (result) => {
dbCon.query('SELECT * FROM transactions',(err,res)=>{
if(err){
    console.log('Error while fetching patients payment',err);
    result(null,err);
}
else{
    console.log('Patients payment fetched successfully');
    result(null,res);
}
});
}



module.exports = PatientPayment;