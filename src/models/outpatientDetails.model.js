var dbConn = require('../../config/db.config');
var OPD = function(opd){
    this.id = opd.id;
    this.case_reference_id = opd.case_reference_id;
    this.patient_id = opd.patient_id;
    this.generated_by = opd.generated_by;
    this.is_ipd_moved = opd.is_ipd_moved;
    this.discharged = opd.discharged;
    this.created_at = opd.created_at;
}
OPD.createOutpatients = (opd_data,result)=>{
    dbConn.query('insert into opd_details set ?',opd_data,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('opd details Data inserted Successfully');
            result(null,res)
        }
    })
}

OPD.getOutpatients = (result)=>{
    dbConn.query('select staff.name,staff.surname,patients.patient_name,patients.guardian_name,patients.gender,patients.mobileno,opd_details.patient_id,visit_details.appointment_date,visit_details.generated_by as total_recheckup from opd_details join visit_details on opd_details.id = visit_details.opd_details_id join staff on staff.id = visit_details.cons_doctor join patients on patients .id = opd_details.patient_id  ',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('operation fetched ');
            result(null,res);
        }
    })
}

module.exports = OPD;