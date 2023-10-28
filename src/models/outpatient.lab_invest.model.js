var dbCon = require('../../config/db.config');

var LabInvestigation = function(patientlabinvestigation) {
this.ipd_id = patientlabinvestigation.ipd_id;
}



    //get patients lab_investigation list

    LabInvestigation.getAllOutPatientLabInvestigation = (result) => {
        const invest = 'SELECT pathology_report.*,pathology.test_name,staff.name,staff.surname,staff.employee_id FROM pathology_report JOIN pathology ON pathology.id = pathology_report.pathology_id JOIN staff on staff.id = pathology_report.approved_by'
dbCon.query(invest,(err,res)=>{
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



module.exports = LabInvestigation;