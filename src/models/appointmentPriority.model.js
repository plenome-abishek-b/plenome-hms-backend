var dbConn = require('../../config/db.config');

var AppointmentPriority = function(appointmentPriority){
    this.id = appointmentPriority.id;
}

AppointmentPriority.getPriority= (result)=>{
    dbConn.query('select * from appoint_priority',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('findingfetched ');
            result(null,res);
        }
    })
}
module.exports = AppointmentPriority