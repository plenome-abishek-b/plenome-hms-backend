const ShiftAppointment = require('../models/shift_appointment.model');

exports.getshiftappointment = (req,res)=>{
    let updatedQuery = 'select global_shift.name,staff.name as staffName,staff.id from global_shift join doctor_global_shift on global_shift.id = doctor_global_shift.global_shift_id join staff on staff.id = doctor_global_shift.staff_id '
    let updatedValues = [];
    if(req.query.staffId){
        updatedQuery += 'where staff.id = ?'
        updatedValues.push(req.query.staffId);
    
    }

    ShiftAppointment.setValues(updatedQuery,updatedValues);
    ShiftAppointment.getAppointmentShift((err,appointmentShift)=>{
        if(err)
        res.send(err);

        console.log('appointment shift is needed',appointmentShift);
        res.send(appointmentShift);
    })
}