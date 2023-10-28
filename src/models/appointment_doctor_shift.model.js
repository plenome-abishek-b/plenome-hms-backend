var dbconn = require('../../config/db.config');
var appointment_doctor_shift = function(doctor_shift){
    this.id = doctor_shift.id;
    this.staff_id = doctor_shift.staff_id;
    this.global_shift_id = doctor_shift.global_shift_id;
    this.created_at = doctor_shift.created_at
}

let query = ''
let values = []
appointment_doctor_shift.setquery = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}

appointment_doctor_shift.getdoctor_shift = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,res);
        }else{
            console.log('doctor shift fetched');
            result(null,res);
        }
    })
}

appointment_doctor_shift.createdoctor_shift = (doctor_shift,result)=>{
    dbconn.query('insert into doctor_global_shift SET ?',doctor_shift,(err,res)=>{
        if(err){
            console.log('error while inserting data',err);
            result(null,err);
        }else{
            console.log('doctor shift inserted successfully');
            result(null,res);
        }
    })
}


appointment_doctor_shift.updatedoctor_shift = (doctor_shiftupdatedata,result)=>{
    dbconn.query(query,[doctor_shiftupdatedata,values],(err,res)=>{
        if(err){
            console.log(err)
            console.log('error while updating data');
            result(null,err);
        }else{
            console.log('doctor shift data updated successfully');
            result(null,res)
        }
    });
}

module.exports = appointment_doctor_shift;

