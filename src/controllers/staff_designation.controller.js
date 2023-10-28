const staff_designation_model = require('../models/staff_designation.model');

exports.create_staff_designation = (req,res) =>{
    const staff_designation_data =new staff_designation_model(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        staff_designation_model.create_designation(staff_designation_data,(err,designation)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' staff designation added successfully',data:designation.insertId});

        })
    }
}
exports.get_staff_designation =(req,res)=>{
    staff_designation_model.get_designation((err,designation)=>{
        if(err)
        res.send(err);
     
        console.log('staff designation',designation);
        res.send(designation);
    })
}