const Leave = require('../models/staff_leave_request.model');

exports.getleaverequest = (req,res)=>{
    Leave.getleaverequest((err,staff_leave)=>{
        if(err)
        res.send(err);

        console.log('dsfgdffd',staff_leave);
        res.send(staff_leave);
    })
}

exports.createstaff_leave_request = (req,res)=>{
    const staff_leave = new Leave(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'fill the details'});
    }else{
        Leave.createleaverequest(staff_leave,(err,request)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'leave request details added successfully',data:request.insertId});

        })
    }
    }
