const radio_parameter = require('../models/radiology_parameter.model');
exports.getparameter = (req,res)=>{

    radio_parameter.getparameter((err,parameter)=>{
        if(err)
        res.send(err);

        console.log('radiology_parameter generated',parameter);
        res.send(parameter);
    })
}

exports.createparameter = (req,res)=>{
    const parameterdata = new radio_parameter(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        radio_parameter.createparameter(parameterdata,(err,parameter)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'radiology_parameter added successfully',data:parameter.insertId});
            
        })
}
}