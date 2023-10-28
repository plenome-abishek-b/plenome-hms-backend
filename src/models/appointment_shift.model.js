var dbconn = require('../../config/db.config');
var appointment_shift = function(shift){
    this.id = shift.id;
    this.name = shift.name;
    this.start_time = shift.start_time;
    this.end_time = shift.end_time;
    this.date_created = shift.date_created;
}

let query = ''
let values = []
appointment_shift.setQuery = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}

appointment_shift.getappointment_shift = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,res);
        }else{
            console.log('appointment shift fetched');
            result(null,res);
        }
    })
}

appointment_shift.createappointment_shift = (shift,result)=>{
    dbconn.query('insert into global_shift SET ?',shift,(err,res)=>{
        if(err){
            console.log('error while inserting data',err);
            result(null,err);
        }else{
            console.log('appointment shift 1 inserted successfully');
            result(null,res);
        }
    })
}
module.exports = appointment_shift;