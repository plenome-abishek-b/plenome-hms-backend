const VisitorsPurposeModel = require('../models/visitors_purpose.model');

exports.createVisitorPurpose = (req,res)=>{
    const purposeData = new VisitorsPurposeModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        VisitorsPurposeModel.createVisitorPurpose(purposeData,(err,purpose)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' payments added successfully',data:purpose.insertId});

        })
    }

}

exports.getVisitorsPurpose = (req,res)=>{
    VisitorsPurposeModel.getVisitorsPurpose((err,purpose)=>{
        if(err)
    res.send(err);
 
    console.log('purpose ',purpose);
    res.send(purpose);
    })
}