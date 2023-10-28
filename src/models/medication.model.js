var dbConn = require('../../config/db.config');
var Medication = function(medication){
    this.id = medication.id;
    this.date = medication.date;
    this.time = medication.time;
    this.ipd_id = medication.ipd_id;
    this.pharmacy_id = medication.pharmacy_id;
    this.opd_details_id = medication.opd_details_id;
    this.medicine_dosage_id = medication.medicine_dosage_id;
    this.remark = medication.remark;
    this.created_at = medication.created_at;
    this.generated_by = medication.generated_by;
}

Medication.createMedication = (medicationData,result)=>{
    dbConn.query('insert into medication_report SET ?',medicationData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('medication Data inserted Successfully');
            result(null,res)
        }
    });
}

let query = '';
let value = [];

Medication.setQuery = (updatedQuery,updatedValue)=>{
    query= updatedQuery;
    value = updatedValue;
}

Medication.getMedication = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('medication_report fetched ');
            result(null,res);
        }
    })
}
module.exports = Medication