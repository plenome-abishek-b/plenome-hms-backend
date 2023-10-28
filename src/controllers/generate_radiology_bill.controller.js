const generate_radiology = require('../models/generate_radiology_bill.model');
exports.getradiology = (req,res)=>{

    generate_radiology.getradiology((err,radiology)=>{
        if(err)
        res.send(err);

        console.log('radiology generated',radiology);
        res.send(radiology);
    })
}

exports.createradiology = (req,res)=>{
    const radiologydata = new generate_radiology(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0) {
        res.send({success:false,message:'please fill the fields'});
    }else{
        generate_radiology.createradiology(radiologydata,(err,radiology)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'radiology bill added successfully',data:radiology.insertId});

        })
    }
    }
