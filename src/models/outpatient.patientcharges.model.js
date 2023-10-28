var dbCon = require('../../config/db.config');

var PatientCharges = function(patientcharges) {
this.date = patientcharges.date;
this.ipd_id = patientcharges.ipd_id;
this.opd_id = patientcharges.opd_id;
this.qty = patientcharges.qty;
this.charge_id = patientcharges.charge_id;
this.standard_charge = patientcharges.standard_charge;
this.tpa_charge = patientcharges.tpa_charge;
this.tax = patientcharges.tax;
this.apply_charge = patientcharges.apply_charge;
this.amount = patientcharges.amount;
this.note = patientcharges.note;
this.created_at = patientcharges.created_at;
}




//Add new visits

PatientCharges.createPatientCharges = (patientReqData,result) =>{
    dbCon.query('INSERT INTO patient_charges SET ?',patientReqData,(err,res)=>{
    if(err){
        console.log('Error while inserting data');
        console.log(err);
        result(null,err);
    }
    else{
        console.log('Patientcharges created successfully')
        result(null,res);
    }
    })
    }


    //get all patients visits list

    PatientCharges.getAllOutPatientCharges = (result) => {

        const pat = 'select patient_charges.*,charges.name,charge_categories.name as category_name,charge_type_master.charge_type from patient_charges join charges on charges.id = patient_charges.charge_id join charge_categories on charge_categories.id = charges.charge_category_id join charge_type_master on charge_type_master.id = charge_categories.charge_type_id'
dbCon.query(pat,(err,res)=>{
if(err){
    console.log('Error while fetching patientscharges',err);
    result(null,err);
}
else{
    console.log('Patientscharges fetched successfully');
    result(null,res);
}
});
}



module.exports = PatientCharges;