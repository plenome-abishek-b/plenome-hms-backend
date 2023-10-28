var dbCon = require('../../config/db.config');

var PatientLabInvestigation = function(patientlabinvestigation) {
this.ipd_id = patientlabinvestigation.ipd_id;
this.opd_id = patientlabinvestigation.opd_id;
this.patient_id  = patientlabinvestigation.patient_id;
this.test_name = patientlabinvestigation.test_name;
this.lab = patientlabinvestigation.lab;
this.sample_collected = patientlabinvestigation.sample_collected;
this.expected_date = patientlabinvestigation.expected_date;
this.approved_by = patientlabinvestigation.approved_by;
this.doctor = patientlabinvestigation.doctor;
this.created_at = patientlabinvestigation.created_at;
}



    //get patients lab_investigation list

    PatientLabInvestigation.getAllOutPatientLabInvestigation = (result) => {
dbCon.query('SELECT * FROM lab_investigation',(err,res)=>{
if(err){
    console.log('Error while fetching patients lab investigation',err);
    result(null,err);
}
else{
    console.log('Patients lab investigation fetched successfully');
    result(null,res);
}
});
}



module.exports = PatientLabInvestigation;