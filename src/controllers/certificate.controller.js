const certificateModel = require('../models/certificate.model');

exports.createCretificate = (req,res)=>{
    const certificateData = new certificateModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        certificateModel.createCertificate(certificateData,(err,certificate)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' certificate added successfully',data:certificate.insertId});

        })
    }
}

exports.getCertificate = (req,res)=>{
    certificateModel.getCertificate((err,certificate)=>{
        if(err)
        res.send(err);
     
        console.log('certificate ',certificate);
        res.send(certificate);
    })
}
