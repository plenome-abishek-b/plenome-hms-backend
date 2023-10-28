const generate_pathology = require('../models/generate_pathology_bill.model');
exports.getpathology = (req,res)=>{

    generate_pathology.getpathology((err,pathology)=>{
        if(err)
        res.send(err);

        console.log('pathology generated',pathology);
        res.send(pathology);
    
    })
}

exports.createpathology = (req,res)=>{
    const pathologydata = new generate_pathology(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        generate_pathology.createpathology(pathologydata,(err,pathology)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'pathology_bill added successfully',data:pathology.insertId});

        })
}
}