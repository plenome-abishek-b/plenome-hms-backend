var dbConn = require('../../config/db.config');
var PatientQueueSlot = function(patientQueueSlot){
    this.id = patientQueueSlot.id;
}
let query = 'select doctor_shift.start_time,doctor_shift.end_time,staff.name,global_shift.name as globalShiftName from doctor_shift join staff on staff.id = doctor_shift.staff_id join global_shift on global_shift.id = doctor_shift.global_shift_id';
let values = [];
PatientQueueSlot.setQuery = (updatedQuery,updatedValues)=>{
    query=updatedQuery;
    values=updatedValues;
}
PatientQueueSlot.getSlot = (result)=>{
    dbConn.query(query,values,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('slot fetched ');
            result(null,res);
        }
    })
}
module.exports = PatientQueueSlot;