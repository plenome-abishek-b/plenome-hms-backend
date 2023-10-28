
const appointmentShift = require('../models/appointmentshift.model');

exports.getshiftappointment = (req,res)=>{
    let updatedQuery = 'select global_shift.name,staff.name as staffName,staff.specialization,global_shift_id from global_shift join doctor_global_shift on global_shift.id = doctor_global_shift.global_shift_id join staff on staff.id = doctor_global_shift.staff_id '
    let updatedValues = [];
    if(req.query.staffId){
        updatedQuery += 'where staff.id = ?'
        updatedValues.push(req.query.staffId);

    } 

appointmentShift.setValues(updatedQuery,updatedValues);
    appointmentShift.getAppointmentShift((err,appointmentShift)=>{
        if(err)
        res.send(err);

        console.log('appointment shift is needed',appointmentShift);
        res.send(appointmentShift);
    })
}