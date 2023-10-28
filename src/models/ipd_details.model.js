var dbConn = require('../../config/db.config');
var Ipd_details = function(ipd_details){
    this.id = ipd_details.id;
    this.patient_id = ipd_details.patient_id;
    this.case_reference_id = ipd_details.case_reference_id;
    this.height = ipd_details.height;
    this.weight = ipd_details.weight;
    this.pulse = ipd_details.pulse;
    this.temperature = ipd_details.temperature;
    this.respiration = ipd_details.respiration;
    this.bp = ipd_details.bp;
    this.bed = ipd_details.bed;
    this.bed_group_id = ipd_details.bed_group_id;
    this.case_type = ipd_details.case_type;
    this.casualty = ipd_details.casualty;
    this.symptoms = ipd_details.symptoms;
    this.known_allergies = ipd_details.known_allergies;
    this.patient_old = ipd_details.patient_old;
    this.note = ipd_details.note;
    this.refference = ipd_details.refference;
    this.cons_doctor = ipd_details.cons_doctor;
    this.organisation_id = ipd_details.organisation_id;
    this.credit_limit = ipd_details.credit_limit;
    this.payment_mode = ipd_details.payment_mode;
    this.date = ipd_details.date;
    this.discharged = ipd_details.discharged;
    this.live_consult = ipd_details.live_consult;
    this.generated_by = ipd_details.generated_by;
    this.created_at = ipd_details.created_at;
}
Ipd_details.get_ipd_details = (result)=>{
    const list = 'SELECT ipd_details.*,patients.patient_name,patients.gender,patients.mobileno FROM patients JOIN ipd_details ON ipd_details.patient_id = patients.id'
    dbConn.query(list,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('ipd_details  fetched ');
            result(null,res);
        }
    })
}
Ipd_details.get_ipd_details_by_id = (id,result)=>{
    dbConn.query('select * from ipd_details where id=?',id,(err,res)=>{
        if(err){
            console.log('Error occured while getting by id',err);
            result(null,err);
        }else{
            console.log('patients fetched by id');
            result(null,res);
        }
})
}

Ipd_details.get_ipd_details_by_Patient_id = (patient_id,result)=>{
    dbConn.query('select * from ipd_details where patient_id = ?',patient_id,(err,res)=>{
        if(err){
            console.log('Error occured while getting by id',err);
            result(null,err);
        }else{
            console.log('patients fetched by patient_id');
            result(null,res);
        }
})
}
Ipd_details.create_ipd_details = (ipd_details_data,result)=>{
    dbConn.query('insert into ipd_details SET ?',ipd_details_data,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('ipd_details Data inserted Successfully');
            result(null,res)
        }
    
    });
}

module.exports = Ipd_details;