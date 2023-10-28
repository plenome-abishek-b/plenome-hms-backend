const reportmodel = require('../models/pathology_report.model');


exports.createreport = (req,res)=>{
    const reportdata = new reportmodel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send({success:false,message:'fill the details'});
    }else{
        reportmodel.createpathology(reportdata,(err,report)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'report added successfully',data:report.insertId});
            
        })
    }
}