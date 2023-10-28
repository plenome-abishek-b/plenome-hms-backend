var dbconn = require('../../config/db.config');
var generate_pathology = function(generate){
    this.id = generate.id;
    this.case_reference_id = generate.case_reference_id;
    this.ipd_prescription_basic_id = generate.ipd_prescription_basic_id;
    this.date = generate.date;
    this.patient_id = generate.patient_id;
    this.doctor_id = generate.doctor_id;
    this.doctor_name = generate.doctor_name;
    this.total = generate.total;
    this.discount_percentage = generate.discount_percentage;
    this.discount = generate.discount;
    this.tax_percentage = generate.tax_percentage;
    this.tax = generate.tax;
    this.net_amount = generate.net_amount;
    this.transaction_id = generate.transaction_id;
    this.note = generate.note;
    this.generated_by = generate.generated_by;
    this.created_at = generate.created_at;
    this.updated_at = generate.updated_at;
}
generate_pathology.getpathology = (result)=>{
    dbconn.query('select * from pathology_billing',(err,res)=>{
        if(err){
            console.log('errror occured',err);
            result(null,err);
        }else{
            console.log('pathology_billing fetched');
            result(null,res);
        }
    })
}

generate_pathology.createpathology = (pathology_billingData,result)=>{
    dbconn.query('insert into pathology_billing SET ?',pathology_billingData,(err,res)=>{
        if(err){
            console.log(err)
            console.log('error while inserting data');
            result(null,err);
        }else{
            console.log('pathology_billing data inserted successfullly');
            result(null,res)
        
        }
    })
}

module.exports = generate_pathology;

