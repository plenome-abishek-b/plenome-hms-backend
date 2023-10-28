const opdModel = require('../models/outpatientDetails.model');

exports.createOutpatients = (req,res)=>{
    const  opd_data = new opdModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        opdModel.createOutpatients(opd_data,(err,opdDetails)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' opdDetails added successfully',data:opdDetails.insertId});

        })
    }
}

exports.getOutpatients = (req,res)=>{
    opdModel.getOutpatients((err,opdDetails)=>{
        if(err)
        res.send(err);
     
        console.log('opdDetails ',opdDetails);
        res.send(opdDetails);

    })
}