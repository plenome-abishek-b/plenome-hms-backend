var dbCon = require('../../config/db.config');

var Visits = function(visits) {
this.opd_details_id = visits.opd_details_id;
this.organisation_id = visits.organisation_id;
this.patient_charge_id = visits.patient_charge_id;
this.transaction_id = visits.transaction_id;
this.cons_doctor = visits.cons_doctor;
this.case_type = visits.case_type;
this.appointment_date = visits.appointment_date;
this.symptoms_type = visits.symptoms_type;
this.symptoms = visits.symptoms;
this.bp = visits.bp;
this.height = visits.height;
this.weight = visits.weight;
this.pulse = visits.pulse;
this.temperature = visits.temperature;
this.respiration = visits.respiration;
this.known_allergies = visits.known_allergies;
this.patient_old = visits.patient_old;
this.casualty = visits.casualty;
this.refference = visits.refference;
this.date = visits.date;
this.note = visits.note;
this.note_remark = visits.note_remark;
this.payment_mode = visits.payment_mode;
this.generated_by = visits.generated_by;
this.live_consult = visits.live_consult;
this.can_delete = visits.can_delete;
this.created_at = visits.created_at;
}




//Add new visits

Visits.createVisits = (patientReqData,result) =>{
    dbCon.query('INSERT INTO visit_details SET ?',patientReqData,(err,res)=>{
    if(err){
        console.log('Error while inserting data');
        console.log(err);
        result(null,err);
    }
    else{
        console.log('Patient Visits created successfully')
        result(null,res);
    }
    })
    }



//get all patients visits list

Visits.getAllPatientsVisits = (result) => {

    const visit = 'SELECT visit_details.*,case_references.id  as case_id FROM visit_details JOIN opd_details ON opd_details.id = visit_details.opd_details_id JOIN case_references ON opd_details.case_reference_id = case_references.id'


dbCon.query(visit,(err,res)=>{
if(err){
    console.log('Error while fetching patients visits',err);
    result(null,err);
}
else{
    console.log('Patients visits fetched successfully');
    result(null,res);
}
});
}



module.exports = Visits;