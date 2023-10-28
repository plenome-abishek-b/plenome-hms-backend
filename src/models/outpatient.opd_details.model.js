var dbCon = require('../../config/db.config');

var PatientOpdDetails = function(patientopddetails) {
this.case_reference_id = patientopddetails.case_reference_id;
this.patient_id = patientopddetails.patient_id;
this.generated_by = patientopddetails.generated_by;
this.is_ipd_moved = patientopddetails.is_ipd_moved;
this.discharged = patientopddetails.discharged;
this.created_at = patientopddetails.created_at;
}



    //get patients Opd Details overview

    PatientOpdDetails.getOpdDetailsOverview = (result) => {
        const list = 'SELECT opd_details.*,patients.patient_name,patients.gender,patients.mobileno,patients.age,appointment.doctor,appointment.date,staff.name,staff.surname,staff.employee_id FROM patients JOIN opd_details ON opd_details.patient_id = patients.id left JOIN appointment ON appointment.patient_id = patients.id left JOIN staff on staff.id = appointment.doctor' 
dbCon.query(list,(err,res)=>{
if(err){
    console.log('Error while fetching patients opd_details',err);
    result(null,err);
}
else{
    console.log('Patients opd_details fetched successfully');
    result(null,res);
}
});
}

//Add new outpatiet

PatientOpdDetails.createOutPatient = (patientReqData,result) =>{
    dbCon.query('INSERT INTO opd_details SET ?',patientReqData,(err,res)=>{
        console.log(patientReqData,'reqdata')
    if(err){
        console.log('Error while inserting data');
        result(null,err);
    }
    else{
        console.log('Outpatient created successfully')
        result(null,res);
    }
    })
    }


module.exports = PatientOpdDetails;