const appointmentModel = require('../models/appointmentshift.model');
const appointmentModels = require('../models/appointment.model')
// exports.getAppointments = (req,res)=>{
//     appointmentModel.getAppointments((err,appointment)=>{
//         if(err)
//         res.send(err);
     
//         console.log('appointment ',appointment);
//         res.send(patient);
//     })
    
// }

exports.createAppointment = (req,res)=>{
    console.log(req.body,"kk")
    const appointmentData = new appointmentModels(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        appointmentModels.createAppointments(appointmentData,(err,appointment)=>{
            if(err)
            res.send(err);
            console.log(appointment,'hiiiiiiii')
            console.log('here')
            res.json({status:true,message:' appointmentData added successfully',data:appointment.insertId});

        })
    }
}


exports.getAppointmentsDoctorWise = (req,res)=>{
    let updatedValues = [];
    let updatedQuery = 'select appointment.*,patients.patient_name,patients.gender,patients.mobileno from appointment join patients on patients.id = appointment.patient_id'
    if (req.query.doctor && req.query.date){
        updatedQuery = 'select appointment.*,patients.patient_name,patients.gender,patients.mobileno from appointment join patients on patients.id = appointment.patient_id where doctor = ? and DATE(date) = ?'
        updatedValues.push(req.query.doctor,req.query.date)
    }
   
    appointmentModel.setValues(updatedQuery, updatedValues);
    appointmentModel.getAppointmentShift((err,doctorwiseAppoint)=>{
        if(err)
        res.send(err);

        console.log('doctorwise  appointment',doctorwiseAppoint);
        res.send(doctorwiseAppoint);
    })
}