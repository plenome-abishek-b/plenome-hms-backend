var dbConn = require('../../config/db.config');
var Appointments = function(appointments){
    this.id = appointments.id;
    this.patient_id = appointments.patient_id;
    this.case_reference_id = appointments.case_reference_id;
    this.visit_details_id = appointments.visit_details_id;
    this.date = appointments.date;
    this.time = appointments.time;
    this.priority = appointments.priority;
    this.specialist = appointments.specialist;
    this.doctor = appointments.doctor;
    this.amount = appointments.amount;
    this.message = appointments.message;
    this.appointment_status = appointments.appointment_status;
    this.source = appointments.source;
    this.is_opd = appointments.is_opd;
    this.is_ipd = appointments.is_ipd;
    this.global_shift_id = appointments.global_shift_id;
    this.shift_id = appointments.shift_id;
    this.is_queue = appointments.is_queue;
    this.live_consult = appointments.live_consult;
    this.created_at = appointments.created_at;
}


Appointments.createAppointments = (appointmentData,result)=>{
    console.log(appointmentData,"data")
    dbConn.query('insert into appointment set ?',appointmentData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('appointment Data inserted Successfully');
            result(null,res)
        }
    })
}


let query = 'select * from appointment';
let values = ['']
Appointments.setValues=(updatedQuery,updatedValues)=>{
    query = updatedQuery;
    values = updatedValues;
}
Appointments.getAppointmentsDoctorWise = (result)=>{
    dbConn.query(query,values,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('doctor wise details fetched ');
            result(null,res);
        }
    })
}

module.exports = Appointments;