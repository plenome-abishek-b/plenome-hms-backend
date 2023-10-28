var dbConn = require('../../config/db.config');
var DischargedReport = function(dischargedReport){
    this.id = dischargedReport.id;
    this.case_reference_id = dischargedReport.case_reference_id;
    this.opd_details_id = dischargedReport.opd_details_id;
    this.ipd_details_id = dischargedReport.ipd_details_id;
    this.discharge_by = dischargedReport.discharge_by;
    this.discharge_date = dischargedReport.discharge_date;
    this.discharge_status = dischargedReport.discharge_status;
    this.death_date = dischargedReport.death_date;
    this.refer_date = dischargedReport.refer_date;
    this.refer_to_hospital = dischargedReport.refer_to_hospital;
    this.reason_for_referral = dischargedReport.reason_for_referral;
    this.operation = dischargedReport.operation;
    this.diagnosis = dischargedReport.diagnosis;
    this.investigations = dischargedReport.investigations;
    this.treatment_home = dischargedReport.treatment_home;
    this.note = dischargedReport.note;
    this.created_at = dischargedReport.created_at;

}
let query1 = 'select * from ipd_details join patients on ipd_details.patient_id = patients.id join discharge_card on discharge_card.ipd_details_id = ipd_details.id where discharged = ?';
let values=['yes'];
DischargedReport.setQuery=(updatedQuery,updatedValues)=>{
    console.log('activated');
 query1 =updatedQuery;
 values = updatedValues;
 console.log('activated query :'+values);
}

DischargedReport.getReport = (result)=>{
   console.log(query1);
    dbConn.query(query1,values,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('discharge fetched ');
            result(null,res);
        }
    })
}
module.exports = DischargedReport;