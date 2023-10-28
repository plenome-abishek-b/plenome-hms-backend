var dbConn = require('../../config/db.config');
var RadiologyBilling = function(radiologyBilling){
    this.id = radiologyBilling.id;
    this.patient_id = radiologyBilling.patient_id;
    this.case_reference_id = radiologyBilling.case_reference_id;
    this.ipd_prescription_basic_id = radiologyBilling.ipd_prescription_basic_id;
    this.doctor_id = radiologyBilling.doctor_id;
    this.date = radiologyBilling.date;
    this.doctor_name = radiologyBilling.doctor_name;
    this.total = radiologyBilling.total;
    this.discount_percentage = radiologyBilling.discount_percentage;
    this.discount = radiologyBilling.discount;
    this.tax_percentage = radiologyBilling.tax_percentage;
    this.tax = radiologyBilling.tax;
    this.net_amount = radiologyBilling.net_amount;
    this.transaction_id = radiologyBilling.transaction_id;
    this.note = radiologyBilling.note;
    this.generated_by = radiologyBilling.generated_by;
    this.created_at = radiologyBilling.created_at;
    this.updated_at = radiologyBilling.updated_at;

}
RadiologyBilling.createRadiologyBilling = (radiologyBillingData,result)=>{
    dbConn.query('insert into radiology_billing SET ?',radiologyBillingData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('radiologyBilling Data inserted Successfully');
            result(null,res)
        }
    });
}
RadiologyBilling.getRadiologyBilling = (result)=>{
    dbConn.query('select radiology_billing.* ,patients.patient_name,staff.name,staff.surname, transactions.amount as paid_amount from radiology_billing join patients on radiology_billing.patient_id = patients.id join staff on staff.id = radiology_billing.doctor_id left join transactions on radiology_billing.id = transactions.radiology_billing_id',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('radiology_billing fetched ');
            result(null,res);
        }
    })
}

let query = '';
let value = []


RadiologyBilling.setQuery = (updatedQuery,updatedValues)=>{
    query= updatedQuery;
    value=updatedValues;
}

RadiologyBilling.updateRadiologyBilling = (radiologyBillingUpdatedData,result)=>{
    dbConn.query(query,[radiologyBillingUpdatedData,value],(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('radiologyBilling Data updated Successfully');
            result(null,res)
        }
    });
}


module.exports = RadiologyBilling;