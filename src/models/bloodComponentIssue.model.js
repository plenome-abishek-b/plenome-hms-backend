var dbConn = require('../../config/db.config');
var BloodComponentIssue = function(bloodComponent){
    this.id = bloodComponent.id;
    this.patient_id = bloodComponent.patient_id;
    this.case_reference_id = bloodComponent.case_reference_id;
    this.blood_donor_cycle_id = bloodComponent.blood_donor_cycle_id;
    this.date_of_issue = bloodComponent.date_of_issue;
    this.hospital_doctor =bloodComponent.hospital_doctor;
    this.reference = bloodComponent.reference;
    this.charge_id = bloodComponent.charge_id;
    this.standard_charge = bloodComponent.standard_charge;
    this.tax_percentage = bloodComponent.tax_percentage;
    this.discount_percentage = bloodComponent.discount_percentage;
    this.amount = bloodComponent.amount;
    this.net_amount = bloodComponent.net_amount;
    this.institution = bloodComponent.institution;
    this.technician = bloodComponent.technician;
    this.remark = bloodComponent.remark;
    this.generated_by = bloodComponent.generated_by;
    this.created_at = bloodComponent.created_at; 
}
BloodComponentIssue.createComponent = (componentData,result)=>{
    dbConn.query('insert into blood_issue SET ?',componentData,(err,res)=>{
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

BloodComponentIssue.getComponent = (result)=>{
    dbConn.query('  SELECT t1.id,t1.bag_no,t1.blood_bank_product_id,t2.id as issue_id,t2.blood_donor_id,t2.amount as issue_amount,bi.patient_id,bi.id as issue_id,bi.case_reference_id,bi.date_of_issue,bi.amount as bi_amount,p.patient_name,p.gender,bbp.name, bd.donor_name,bbp2.name,transactions.amount as paid_amount,(t2.amount - transactions.amount) as balance_amount FROM blood_donor_cycle AS t1 JOIN blood_donor_cycle AS t2 ON t1.blood_donor_cycle_id = t2.id join blood_issue as bi on bi.blood_donor_cycle_id = t1.id join patients as p on p.id = bi.patient_id join blood_bank_products as bbp on t1.blood_bank_product_id = bbp.id join blood_donor as bd on bd.id = t2.blood_donor_id join blood_bank_products as bbp2 on bd.blood_bank_product_id = bbp2.id left join transactions on transactions.blood_issue_id = bi.id',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('blood_issue fetched ');
            result(null,res);
        }
    })
}

module.exports = BloodComponentIssue;