const sourceModel = require('../models/source.model');

exports.createSource = (req,res)=>{
    const sourceData = new sourceModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        sourceModel.createSource(sourceData,(err,source)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' payments added successfully',data:source.insertId});

        })
    }
}

exports.getSource = (req,res)=>{
    sourceModel.getSource((err,source)=>{
        if(err)
    res.send(err);
 
    console.log('source ',source);
    res.send(source);
    })
}