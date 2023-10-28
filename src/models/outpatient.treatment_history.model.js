var dbCon = require('../../config/db.config');

var PatientTreatmentHistory = function(patienttreatmenthistory) {
this.ipd_id = patienttreatmenthistory.ipd_id;
this.opd_id = patienttreatmenthistory.opd_id;
this.appointment_id  = patienttreatmenthistory.appointment_id;
this.symptoms = patienttreatmenthistory.symptoms;
this.consultant = patienttreatmenthistory.consultant;
this.bed = patienttreatmenthistory.bed;
this.created_at = patienttreatmenthistory.created_at;
}



    //get patients treatment history list

    PatientTreatmentHistory.getAllOutPatientTreatmentHistory = (result) => {
dbCon.query('SELECT * FROM treatment_history',(err,res)=>{
if(err){
    console.log('Error while fetching patients treatment history',err);
    result(null,err);
}
else{
    console.log('Patients treatment history fetched successfully');
    result(null,res);
}
});
}



module.exports = PatientTreatmentHistory;