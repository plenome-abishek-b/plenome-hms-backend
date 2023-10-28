const operationModel =require('../models/operation.model');

exports.createOperation = (req,res)=>{
    const operationData = new operationModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        operationModel.createOperation(operationData,(err,operation)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' operation added successfully',data:operation.insertId});

        })
    }
}

exports.getOperation = (req,res)=>{
    operationModel.getOperation((err,operation)=>{
        if(err)
    res.send(err);
 
    console.log('operation ',operation);
    res.send(operation);
    })
}