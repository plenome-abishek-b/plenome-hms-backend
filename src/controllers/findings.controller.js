const FindingModel = require('../models/findings.model');
exports.getFindings = (req,res)=>{
    FindingModel.getFindings((err,finding)=>{

      
        if(err)
        res.send(err);
     
        console.log('finding ',finding);
        res.send(finding);
    
    })
}