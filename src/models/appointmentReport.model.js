var dbConn = require('../../config/db.config');

var AppointmentReport = function(appointmentReport){
    this.is = appointmentReport.id
}
let query = '';
let value = []
AppointmentReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}
AppointmentReport.getAppointmentReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Appointment Report fetched ');
            result(null,res);
        }
    })
}
module.exports = AppointmentReport