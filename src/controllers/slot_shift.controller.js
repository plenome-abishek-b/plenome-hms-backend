const appointment_shift = require('../models/slot_shift.model');

exports.getappointmentshift = (req,res)=>{

    let updatedquery = 'select * from global_shift';
    let updatedvalue = [];
    
    if(req.query.id){
        updatedquery = 'select * from global_shift where id = ?'
        updatedvalue.push(req.query.id);
    }

    appointment_shift.setQuery(updatedquery,updatedvalue);
    appointment_shift.getappointment_shift((err,shift)=>{
        if(err)
        res.send(err);

        console.log('appointment shift fetched',shift);
        res.send(shift);
    })
}

// exports.createappointmentshift = (req,res)=>{
//     const shiftdata = new appointment_shift(req.body);

//     if(req.body.constructor === Object && Object(req.body).length ===0){
//         res.send({success:false,message:'fill the details'});
//     }else{
//         appointment_shift.createappointment_shift(shiftdata,(err,shift)=>{
//             if(err)
//             res.send(err);
//             res.json({status:true,message:'appointment shift added successfully',data:shift.insertId});
            
//         })
//     }
// }