var dbconn = require('../../config/db.config');
var ShiftAppointment = function(slot){
    this.id = slot.id;
}

let query = 'select global_shift.name,staff.name,staff.id from global_shift join doctor_global_shift on global_shift.id = doctor_global_shift.global_shift_id join staff on staff.id = doctor_global_shift.staff_id where staff_id = 3';
let values = ['']
ShiftAppointment.setValues=(updatedQuery,updatedValues)=>{
    query = updatedQuery;
    values = updatedValues;
}

ShiftAppointment.getAppointmentShift = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('shift details fetched');
            result(null,res);
        }
    })
}

module.exports = ShiftAppointment;