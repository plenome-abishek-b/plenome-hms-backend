var dbCon = require('../../config/db.config');

var PatientLiveConsultation = function(patientliveconsultation) {
this.consultation_title = patientliveconsultation.consultation_title;
this.date = patientliveconsultation.date;
this.created_by  = patientliveconsultation.created_by;
this.created_for = patientliveconsultation.created_for;
this.ipd_id = patientliveconsultation.ipd_id;
this.opd_id = patientliveconsultation.opd_id;
this.appointment_id = patientliveconsultation.appointment_id;
this.patient_id = patientliveconsultation.patient_id;
this.doctor_id = patientliveconsultation.doctor_id;
this.status = patientliveconsultation.status;
this.created_at = patientliveconsultation.created_at;
}



    //get patients Live Consultation list

    PatientLiveConsultation.getAllOutPatientLiveConsultation = (result) => {
dbCon.query('SELECT * FROM live_consultation',(err,res)=>{
if(err){
    console.log('Error while fetching patients Live Consultation',err);
    result(null,err);
}
else{
    console.log('Patients Live Consultation fetched successfully');
    result(null,res);
}
});
}



module.exports = PatientLiveConsultation;