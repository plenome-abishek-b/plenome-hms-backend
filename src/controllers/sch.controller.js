const schmodel = require('../models/sch.model');
exports.getschdetails = (req,res)=>{
    schmodel.getschdetails ((err,schlist)=>{
        if(err)
        res.send(err);
     
        console.log('schlist ',schlist);
        res.send(schlist);
    })
}


exports.createschdetails =(req,res)=>{
    const schdata = new schmodel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        schmodel.createschdetails(schdata,(err,schlist)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' sch data added successfully',data:schlist.insertId});

        })
    }
}
