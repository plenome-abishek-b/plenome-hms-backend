const dbCon = require('../../config/db.config');
var dbcon = require('../../config/db.config');

var OutPatientDischargeCard = function(outpatientdischargecard) {
this.case_reference_id = outpatientdischargecard.case_reference_id;
this.opd_details_id = outpatientdischargecard.opd_details_id;
this.ipd_details_id = outpatientdischargecard.ipd_details_id;
this.discharge_by = outpatientdischargecard.discharge_by;
this.discharge_date = outpatientdischargecard.discharge_date;
this.discharge_status = outpatientdischargecard.discharge_status;
this.death_date = outpatientdischargecard.death_date;
this.refer_date = outpatientdischargecard.refer_date;
this.refer_to_hospital = outpatientdischargecard.refer_to_hospital;
this.reason_for_referral = outpatientdischargecard.reason_for_referral;
this.operation = outpatientdischargecard.operation;
this.diagnosis = outpatientdischargecard.diagnosis;
this.investigations = outpatientdischargecard.investigations;
this.treatment_home = outpatientdischargecard.treatment_home;
this.note = outpatientdischargecard.note;
this.created_at = outpatientdischargecard.created_at;
}

//get all discharged patients list

OutPatientDischargeCard.getAllDischargedPatients = (result) => {
dbcon.query('SELECT * FROM discharge_card',(err,res)=>{
if(err){
    console.log('Error while fetching patients',err);
    result(null,err);
}
else{
    console.log('Patients fetched successfully');
    result(null,res);
}
});
}

//get discharged patient profile by OPD ID

OutPatientDischargeCard.getDischargedPatientByID = (opd_details_id,result) =>{
dbCon.query('SELECT * FROM discharge_card WHERE opd_details_id=?',opd_details_id,(err,res)=>{
if(err){
    console.log('Error while fetching patient by ID',err);
    result(null,err);
}
else{
    result(null,res);
}
})
}


//get discharged patient list by Doctor staff ID

OutPatientDischargeCard.getDischargedPatientByDoctorID = (discharge_by,result) =>{
    dbCon.query('SELECT * FROM discharge_card WHERE discharge_by=?',discharge_by,(err,res)=>{
    if(err){
        console.log('Error while fetching patient by Doctor ID',err);
        result(null,err);
    }
    else{
        result(null,res);
    }
    })
    }




module.exports = OutPatientDischargeCard;