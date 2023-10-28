var unit = require('../models/unit.model');

exports.getunit = (req,res)=>{
    let updatedquery = 'select * from unit'
    let updatedvalues = [];

    if(req.query.id){
        updatedquery = 'select * from unit'
        updatedvalues.push(req.query.id);
    }

    unit.setvalues(updatedquery,updatedvalues);
    unit.getunit((err,unit)=>{
        if(err)
        res.send(err);

        console.log('unit is needed',unit);
        res.send(unit);
    })
}


exports.createunit = (req,res)=>{
    const measuredata = new unit(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        unit.createunit(measuredata,(err,measure)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'unit added sucessfully',data:measure.insertId});
        })
}
}