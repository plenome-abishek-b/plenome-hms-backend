const BloodComponentIssueModel = require('../models/bloodComponentIssue.model');
exports.createComponent = (req,res)=>{
    const componentData = new BloodComponentIssueModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        BloodComponentIssueModel.createComponent(componentData,(err,componentissue)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' blood component issue added successfully',data:componentissue.insertId});

        })
    }
}

exports.getComponent = (req,res)=>{
    BloodComponentIssueModel.getComponent((err,componentIssue)=>{
        if(err)
        res.send(err);
     
        console.log('componentIssue ',componentIssue);
        res.send(componentIssue);
    })
}