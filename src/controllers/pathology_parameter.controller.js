const patho_parameter = require('../models/pathology_parameter.model');
exports.getparameter = (req,res)=>{

    patho_parameter.getparameter((err,parameter)=>{
        if(err)
        res.send(err);

        console.log('pathology_parameter generated',parameter);
        res.send(parameter);
    })
}

exports.createparameter = (req,res)=>{
    const parameterdata = new patho_parameter(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        patho_parameter.createparameter(parameterdata,(err,parameter)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'pathology_parameter added successfully',data:parameter.insertId});

        })
    }
}