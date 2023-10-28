const old_unit = require('../models/unit_radiology.model');
exports.getunit = (req,res)=>{

    old_unit.getunit((err,measurement)=>{
        if(err)
        res.send(err);

        console.log('unit radiology generated',measurement);
        res.send(measurement);
    })
}

exports.createunit = (req,res)=>{
    const measurementdata = new old_unit(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.send({success:false,message:'fill the fields'});
    }else{
        old_unit.createunit(measurementdata,(err,measurement)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'unit radiology added successfullt',data:measurement.insertId});
        })
    }
}