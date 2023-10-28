const complainTypeModel = require('../models/complainType.model');

exports.createComplaintType = (req,res)=>{
    const complainTypeData = new complainTypeModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        complainTypeModel.createComplaintType(complainTypeData,(err,complaintType)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' complaint Type added successfully',data:complaintType.insertId});

        })
    }
}

exports.getComplaintType = (req,res)=>{
    complainTypeModel.getComplaintType((err,complaintType)=>{
        if(err)
    res.send(err);
 
    console.log('complaintType ',complaintType);
    res.send(complaintType);
    })
}