const appointment_doctor_shift = require('../models/appointment_doctor_shift.model');

exports.getdoctor_shift = (req,res)=>{
    let updatedquery = 'select * from doctor_global_shift'
    let updatedvalues = [];

    if(req.query.search){
        updatedquery = 'select * from doctor_global_shift '
        updatedvalues.push('%'+req.query.search+'+');
        updatedvalues.push('%'+req.query.search+'%');
    }

    appointment_doctor_shift.setquery(updatedquery,updatedvalues)
    appointment_doctor_shift.getdoctor_shift((err,doctor)=>{
        if(err)
        res.send(err);

        console.log('appointment doctor shift fetched',doctor);
        res.send(doctor);
    })
}

exports.createdoctor_shift = (req,res)=>{
    const doctordata = new appointment_doctor_shift(req.body);

    if(req.body.constructor === Object && Object(req.body).length ===0){
        res.send({success:false,message:'fill the details'});
    }else{
        appointment_doctor_shift.createdoctor_shift(doctordata,(err,doctor)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'doctor shift added successfully',data:doctor.insertId});

        })
    }
}

exports.updatedoctor_shift = (req,res)=>{
    let updatedquery = '';
    let updatedvalues = []

    if(req.query.id){
        updatedquery = 'update doctor_global_shift SET ? where id = ?'
        updatedvalues.push(req.query.id)
    }
    appointment_doctor_shift.setquery(updatedquery,updatedvalues)
    const doctor_shiftupdatedata = new appointment_doctor_shift(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        appointment_doctor_shift.updatedoctor_shift(doctor_shiftupdatedata,(err,doctor)=>{
            if(err){
            res.send(err);
            }else{
                if(doctor_shiftupdatedata.id == updatedvalues[0]){
                    res.json({status:true,message:'doctor global shift updated successfully',data:doctor_shiftupdatedata.id});
                }else{
                    res.json({status:false,message:'post value and id should be same'})
                }
            }
        })

    }
}
