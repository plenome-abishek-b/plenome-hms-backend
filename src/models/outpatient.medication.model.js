var dbCon = require('../../config/db.config');

var PatientMedication = function(patientmedication) {
this.medicine_dosage_id = patientmedication.medicine_dosage_id;
this.pharmacy_id = patientmedication.pharmacy_id;
this.opd_details_id = patientmedication.opd_details_id;
this.ipd_id = patientmedication.ipd_id;
this.date = patientmedication.date;
this.time = patientmedication.time;
this.remark = patientmedication.remark;
this.generated_by = patientmedication.generated_by;
this.created_at = patientmedication.created_at;
}




//Add new visits

PatientMedication.createPatientMedication = (patientReqData,result) =>{
    dbCon.query('INSERT INTO medication_report SET ?',patientReqData,(err,res)=>{
    if(err){
        console.log('Error while inserting data');
        console.log(err);
        result(null,err);
    }
    else{
        console.log('Patientmedication created successfully')
        result(null,res);
    }
    })
    }


    //get all patients medication list

    PatientMedication.getAllOutPatientMedication = (result) => {
        const medi = 'select medication_report.date,medicine_dosage.dosage,pharmacy.medicine_name,charge_units.unit from medication_report join pharmacy on pharmacy.id = medication_report.pharmacy_id join medicine_dosage on medicine_dosage.id = medication_report.medicine_dosage_id join charge_units on charge_units.id = medicine_dosage.charge_units_id'
dbCon.query(medi,(err,res)=>{
if(err){
    console.log('Error while fetching patientmedication',err);
    result(null,err);
}
else{
    console.log('Patientmedication fetched successfully');
    result(null,res);
}
});
}



module.exports = PatientMedication;