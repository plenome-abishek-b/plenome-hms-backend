const BloodissueModel = require('../models/bloodissue.model');

exports.createBloodissue = (req,res)=>{
    console.log(req.body,"reqqqqqqqqq")
    const issueData = new BloodissueModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        BloodissueModel.createBloodissue(issueData,(err,bloodissue)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' bloodissue added successfully',data:bloodissue.insertId});

        })
    }
}

exports.getBloodissue = (req,res)=>{
    BloodissueModel.getBloodissue((err,bloodissue)=>{
        if(err)
    res.send(err);
 
    console.log('bloodissue ',bloodissue);
    res.send(bloodissue);
    })
}