const SpecialistModel = require('../models/specialist.model');

exports.createSpecialist = (req,res)=>{
    const SpecialistData = new SpecialistModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        SpecialistModel.createSpecialist (SpecialistData,(err,specialist)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' specialist added successfully',data:specialist.insertId});

        })
    }
}

exports.getSpecialist = (req,res)=>{
    SpecialistModel.getSpecialist ((err,specialist)=>{
        if(err)
        res.send(err);
     
        console.log('specialist ',specialist);
        res.send(specialist);
    })
}