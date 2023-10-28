var dbCon = require('../../config/db.config');

var TreatmentHistory = function(patientlabinvestigation) {
this.ipd_id = patientlabinvestigation.ipd_id;
}



    //get patients lab_investigation list

    TreatmentHistory.getTreatmentHistory = (result) => {
        const treat = 'SELECT visit_details.*,staff.name,staff.surname,staff.employee_id FROM visit_details JOIN staff on staff.id = visit_details.cons_doctor'
dbCon.query(treat,(err,res)=>{
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



module.exports = TreatmentHistory;