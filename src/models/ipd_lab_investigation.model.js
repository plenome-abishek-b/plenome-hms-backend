var dbConn = require('../../config/db.config');
var Lab_investigation = function(lab_investigation){
this.id = lab_investigation.id;
this.ipd_id = lab_investigation.ipd_id;
this.opd_id = lab_investigation.opd_id;
this.patient_id = lab_investigation.patient_id;
this.test_name = lab_investigation.test_name;
this.lab = lab_investigation.lab;
this.sample_collected = lab_investigation.sample_collected;
this.expected_date = lab_investigation.expected_date;
this.approved_by = lab_investigation.approved_by;
this.doctor = lab_investigation.doctor;
this.created_at = lab_investigation.created_at;
}

Lab_investigation.get_lab_investigation = (result)=>{

    const query =  'SELECT pathology_report.*,pathology.test_name,staff.name,staff.surname,staff.employee_id FROM pathology_report JOIN pathology ON pathology.id = pathology_report.pathology_id JOIN staff on staff.id = pathology_report.approved_by'
    dbConn.query(query,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('patients  fetched ');
            result(null,res);
        }
    })
}

Lab_investigation.get_lab_investigation_by_name = (testName,result)=>{
    dbConn.query('select * from lab_investigation where test_name=?',testName,(err,res)=>{
        if(err){
            console.log('Error occured while getting by testName',err);
            result(null,err);
        }else{
            console.log('lab_investigation fetched by testName');
            result(null,res);
        }
})
}


module.exports=Lab_investigation;