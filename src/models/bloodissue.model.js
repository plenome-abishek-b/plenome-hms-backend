var dbConn = require('../../config/db.config');
var Bloodissue = function(bloodissue){
    this.id = bloodissue.id;
    this.patient_id = bloodissue.patient_id;
    this.case_reference_id = bloodissue.case_reference_id;
    this.blood_donor_cycle_id = bloodissue.blood_donor_cycle_id;
    this.date_of_issue = bloodissue.date_of_issue;
    this.hospital_doctor =bloodissue.hospital_doctor;
    this.reference = bloodissue.reference;
    this.charge_id = bloodissue.charge_id;
    this.standard_charge = bloodissue.standard_charge;
    this.tax_percentage = bloodissue.tax_percentage;
    this.discount_percentage = bloodissue.discount_percentage;
    this.amount = bloodissue.amount;
    this.net_amount = bloodissue.net_amount;
    this.institution = bloodissue.institution;
    this.technician = bloodissue.technician;
    this.remark = bloodissue.remark;
    this.generated_by = bloodissue.generated_by;
    this.created_at = bloodissue.created_at; 
}
Bloodissue.createBloodissue = (issueData,result)=>{
    dbConn.query('insert into blood_issue SET ?',issueData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('blood issue Data inserted Successfully');
            result(null,res)
        }
    });
}
Bloodissue.getBloodissue = (result)=>{
    dbConn.query('SELECT blood_issue.id,blood_issue.patient_id,patients.patient_name,blood_issue.date_of_issue,blood_issue.case_reference_id,blood_donor_cycle.bag_no,blood_donor.donor_name,patients.gender, blood_bank_products.name as prod_name ,blood_issue.net_amount,transactions.amount as paid_amount,(blood_issue.net_amount - transactions.amount) as balance_amount from blood_issue join patients on patients.id = blood_issue.patient_id  join blood_donor_cycle on blood_donor_cycle.id = blood_issue.blood_donor_cycle_id join blood_donor on blood_donor.id = blood_donor_cycle.blood_donor_id join blood_bank_products on blood_bank_products.id = blood_donor.blood_bank_product_id left join transactions on transactions.blood_issue_id = blood_issue.id ',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('blood_issue fetched ');
            result(null,res);
        }
    })
}

module.exports = Bloodissue;