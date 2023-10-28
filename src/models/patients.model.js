var dbConn = require('../../config/db.config');
var patients = function(patients){
    this.id = patients.id;
    this.lang_id = patients.lang_id;
    this.patient_name = patients.patient_name;
    this.dob = patients.dob;
    this.age = patients.age;
    this.month = patients.month;
    this.day = patients.day;
    this.image = patients.image;
    this.mobileno = patients.mobileno;
    this.email = patients.email;
    this.gender = patients.gender;
    this.marital_status = patients.marital_status;
    this.blood_group = patients.blood_group;
    this.blood_bank_product_id = patients.blood_bank_product_id;
    this.address = patients.address;
    this.guardian_name= patients.guardian_name;
    this.patient_type = patients.patient_type;
    this.identification_number = patients.identification_number;
    this.known_allergies = patients.known_allergies;
    this.note = patients.note;
    this.is_ipd = patients.is_ipd;
    this.app_key = patients.app_key;
    this.insurance_id = patients.insurance_id;
    this.insurance_validity = patients.insurance_validity;
    this.is_dead = patients.is_dead;
    this.is_active = patients.is_active;
    this.disable_at = patients.disable_at;
    this.created_at = patients.created_at;
}
patients.createPatient = (patientData,result)=>{
    dbConn.query('insert into patients SET ?',patientData,(err,res)=>{
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


let query = 'select * from patient';
let values = ['']
patients.setValues=(updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}
patients.getpatients = (result)=>{
    dbConn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('patients details fetched');
            result(null,res);
        }
    })
}


module.exports = patients;