const appointment_shift = require('../models/appointment_shift.model');

exports.getappointmentshift = (req,res)=>{
    let updatedquery = 'select * from global_shift'
    let updatedvalues = [];

    if(req.query.search){
        updatedquery += ' where global_shift.name like ? or global_shift.start_time  like ? or global_shift.end_time  like ?'
        updatedvalues.push('%'+req.query.search+'%');
        updatedvalues.push('%'+req.query.search+'%');
        updatedvalues.push('%'+req.query.search+'%');

    }
    
    appointment_shift.setQuery(updatedquery,updatedvalues)
    appointment_shift.getappointment_shift((err,shift)=>{
        if(err)
        res.send(err);

        console.log('appointment shift  fetched',shift);
        res.send(shift);
    })
}

exports.createappointmentshift = (req,res)=>{
    const shiftdata = new appointment_shift(req.body);

    if(req.body.constructor === Object && Object(req.body).length ===0){
        res.send({success:false,message:'fill the details'});
    }else{
        appointment_shift.createappointment_shift(shiftdata,(err,shift)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'appointment shift  added successfully',data:shift.insertId});
            
        })
    }
}