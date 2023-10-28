const CaseReferenceModel = require('../models/caseRef.model');

exports.createCaseReference=(req,res)=>{
    const CaseReferenceData = new CaseReferenceModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        CaseReferenceModel.createCaseReference(CaseReferenceData,(err,CaseReference)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' CaseReference added successfully',data:CaseReference.insertId});

        })
    }

}