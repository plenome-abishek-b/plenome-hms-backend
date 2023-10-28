var dbconn = require('../../config/db.config');
var report = function(pathology){
    this.id = pathology.id;
    this.pathology_bill_id = pathology.pathology_bill_id;
    this.pathology_id = pathology.pathology_id;
    this.customer_type = pathology.customer_type;
   // this.patiend_id = pathology.patiend_id;
    this.reporting_date = pathology.reporting_date;
    this.parameter_update = pathology.parameter_update;
    this.tax_percentage = pathology.tax_percentage;
    this.apply_charge = pathology.apply_charge;
    this.collection_date =pathology.collection_date;
    this.pathology_center = pathology.pathology_center;
    this.approved_by = pathology.approved_by;
    this.patient_name = pathology.patient_name;
    this.description = pathology.description;
    this.pathology_report = pathology.pathology_report;
    this.report_name = pathology.report_name;
    this.pathology_result = pathology.pathology_result;
    this.created_at = pathology.created_at;
}

report.createpathology = (reportdata,result)=>{
    dbconn.query('insert into pathology_report SET ?',reportdata,(err,res)=>{
        if(err){
            console.log(err)
            console.log('error while inserting data');
            result(null,err);
        }else{
            console.log('report data inserted successfully');
            result(null,res)
        }
    })
}


module.exports = report;