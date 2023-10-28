var dbconn = require('../../config/db.config');
var generate_radiology = function(generates){
    this.id = generates.id;
    this.patient_id = generates.patient_id;
    this.case_reference_id = generates.case_reference_id;
    this.ipd_prescription_basic_id = generates.ipd_prescription_basic_id;
    this.doctor_id = generates.doctor_id;
    this.date = generates.date;
    this.doctor_name = generates.doctor_name;
    this.total = generates.total;
    this.discount_percentage = generates.discount_percentage;
    this.discount = generates.discount;
    this.tax_percentage = generates.tax_percentage;
    this.tax = generates.tax;
    this.net_amount = generates.net_amount;
    this.transaction_id = generates.transaction_id;
    this.note = generates.note;
    this.generated_by = generates.generated_by;
    this.created_at = generates.created_at;
    this.updated_at = generates.updated_at;
}

generate_radiology.getradiology = (result)=>{
    dbconn.query('select * from radiology_billing',(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('radiology_billing fetched');
            result(null,res);
        }
    })
}

generate_radiology.createradiology = (radiology_billingdata,result)=>{
    dbconn.query('insert into radiology_billing SET ?',radiology_billingdata,(err,res)=>{
        if(err){
            console.log(err)
            console.log('error while inserting data');
            result(null,err);

        }else{
            console.log('radiology_billing data inserted');
            result(null,res)
        }
    })
}

module.exports = generate_radiology;