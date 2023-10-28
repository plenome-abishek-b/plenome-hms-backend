const lab_investigation_model = require('../models/lab_investigation.model');
exports.get_lab_investigations = (req,res)=>{
    lab_investigation_model.get_lab_investigation((err,lab_investigation)=>{
        if(err)
        res.send(err);
     
        console.log('lab_investigation ',lab_investigation);
        res.send(lab_investigation);
    })
}

exports.get_lab_investigations_by_name =(req,res)=>{
    console.log('get investigations bu id');
    lab_investigation_model.get_lab_investigation_by_name(req.params.test_name,(err,lab_investigation)=>{
         
        if(err)
            res.send(err);
           
            console.log(' lab_investigation by name',lab_investigation);
            res.send(lab_investigation);
        
    })
}