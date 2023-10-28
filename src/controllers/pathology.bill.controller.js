const PathologyBillTest = require('../models/pathology.bill.model');
exports.getpathologybilltest = (req,res)=>{
    PathologyBillTest.getpathologybilltest ((err,pathologybill)=>{
        if(err)
        res.send(err);
     
        console.log('pathologybill ',pathologybill);
        res.send(pathologybill);
    })
}