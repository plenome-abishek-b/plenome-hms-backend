const priorityModel = require('../models/priority.model');

exports.createPriority = (req,res)=>{
    const priorityData = new priorityModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        priorityModel.createPriority(priorityData,(err,priority)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' priority added successfully',data:priority.insertId});

        })
    }
}

exports.getPriority = (req,res)=>{
    priorityModel.getPriority((err,priority)=>{
        if(err)
    res.send(err);
 
    console.log('priority ',priority);
    res.send(priority);
    })
}