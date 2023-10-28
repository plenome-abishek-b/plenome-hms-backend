var dbconn = require('../../config/db.config');
var patient = function(note){
    this.id = note.id;
    this.lang_id = note.lang_id;
    this.patient_name = note.patient_name;
    this.dob = note.dob;
    this.age = note.age;
    this.month = note.month;
    this.day = note.day;
    this.image = note.image;
    this.mobileno = note.mobileno;
    this.email = note.email;
    this.gender = note.gender;
    this.marital_status = note.marital_status;
    this.blood_group = note.blood_group;
    this.blood_bank_product_id = note.blood_bank_product_id;
    this.address = note.address;
    this.guardian_name= note.guardian_name;
    this.patient_type = note.patient_type;
    this.identification_number = note.identification_number;
    this.known_allergies = note.known_allergies;
    this.note = note.note;
    this.is_ipd = note.is_ipd;
    this.app_key = note.app_key;
    this.insurance_id = note.insurance_id;
    this.insurance_validity = note.insurance_validity;
    this.is_dead = note.is_dead;
    this.is_active = note.is_active;
    this.disable_at = note.disable_at;
    this.created_at = note.created_at;
}

let query = '';
let value = [];

patient.setQuery = (updatedquery,updatedvalue)=>{
    query = updatedquery;
    value = updatedvalue;
}

patient.getpatient = (result)=>{
    dbconn.query(query,value,(err,res)=>{
        console.log(query);
        if(err){
            console.log('error occured',err);
            result(null,err)
        }else{
            console.log('patient details fetched'+ query);
            result(null,res);
        }
    })
}

patient.createpatient = (patientdata,result)=>{
    dbconn.query('insert into patient SET ?',patientdata,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('patients Data inserted Successfully');
            result(null,res)
}
    });
}

module.exports = patient;