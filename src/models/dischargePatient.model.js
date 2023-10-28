var dbConn = require('../../config/db.config');
var Discharged_patient = function(discharged_patient){
    this.id = discharged_patient.id;
    this.case_reference_id = discharged_patient.case_reference_id;
    this.opd_details_id = discharged_patient.opd_details_id;
    this.ipd_details_id = discharged_patient.ipd_details_id;
    this.discharge_by = discharged_patient.discharge_by;
    this.discharge_date = discharged_patient.discharge_date;
    this.discharge_status = discharged_patient.discharge_status;
    this.death_date = discharged_patient.death_date;
    this.refer_date = discharged_patient.refer_date;
    this.refer_to_hospital = discharged_patient.refer_to_hospital;
    this.reason_for_referral = discharged_patient.reason_for_referral;
    this.operation = discharged_patient.operation;
    this.diagnosis = discharged_patient.diagnosis;
    this.investigations = discharged_patient.investigations;
    this.treatment_home = discharged_patient.treatment_home;
    this.note = discharged_patient.note;
    this.created_at = discharged_patient.created_at;

}

Discharged_patient.get_discharged_patients = (result)=>{
    dbConn.query('select patients.patient_name,ipd_details.patient_id,ipd_details.case_reference_id,patients.gender, patients.mobileno,ipd_details.cons_doctor,staff.name,staff.surname,discharge_card.discharge_date,ipd_details.date from patients join ipd_details on ipd_details.patient_id = patients.id join staff on  staff.id = ipd_details.cons_doctor join discharge_card on ipd_details.id = discharge_card.ipd_details_id',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('discharge fetched ');
            result(null,res);
        }
    })
}

Discharged_patient.get_discharged_patient_by_id = (id,result)=>{
    dbConn.query('select * from discharge_card where id=?',id,(err,res)=>{
        if(err){
            console.log('Error occured while getting by id',err);
            result(null,err);
        }else{
            console.log('discharge_card fetched by id');
            result(null,res);
        }
})
}

Discharged_patient.create_discharged_patient =(dischargedData,result)=>{
    dbConn.query('insert into discharge_card SET ?',dischargedData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('discharged Data inserted Successfully');
            result(null,res)
        }
    });

}

module.exports = Discharged_patient;