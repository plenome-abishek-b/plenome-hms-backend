

const leave_type_model =require('../models/leave_type.model')

// create new leave_types
exports.create_leave_types=(req,res)=>{
    const leave_type_data = new leave_type_model(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        leave_type_model.create_leave(leave_type_data,(err,leave_type)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' leave_type added successfully',data:leave_type.insertId});

        })
    }
}

exports.get_leave_types=(req,res)=>{
    leave_type_model.get_leave((err,leave_type) =>{
        if(err)
            res.send(err);
         
            console.log('leave type',leave_type);
            res.send(leave_type);
    })
}