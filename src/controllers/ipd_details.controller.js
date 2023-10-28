const ipd_details_model = require('../models/ipd_details.model');
exports.get_ipd_details = (req,res)=>{
    ipd_details_model.get_ipd_details((err,ipd_details)=>{
        if(err)
        res.send(err);
     
        console.log('ipd_details ',ipd_details);
        res.send(ipd_details);
    })
}

exports.get_ipd_details_by_id = (req,res)=>{
    console.log('get ipd_details by id');
    ipd_details_model.get_ipd_details_by_id(req.params.id,(err, ipd_details)=>{
         
        if(err)
            res.send(err);
           
            console.log('Single ipd_details',ipd_details);
            res.send(ipd_details[0]);
        })
}


exports.get_ipd_details_by_Patient_id = (req,res)=>{
    console.log('get ipd_details by id');
    ipd_details_model.get_ipd_details_by_Patient_id(req.params.patient_id,(err, ipd_details)=>{
         
        if(err)
            res.send(err);
           
            console.log('Single ipd_details by patient id',ipd_details);
            res.send(ipd_details);
        })
}


exports.create_ipd_details = (req,res)=>{
    const ipd_details_data = new ipd_details_model(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        ipd_details_model.create_ipd_details(ipd_details_data,(err,ipd_detail)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' ipd_details added successfully',data:ipd_detail.insertId});

        })
    }
}