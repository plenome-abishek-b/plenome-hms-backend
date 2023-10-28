const pathology_category = require('../models/patho_category.model');
exports.getpathology_category = (req,res)=>{

    pathology_category.getpathology_category((err,category)=>{
        if(err)
        res.send(err);

        console.log('pathology_category generated',category);
        res.send(category);
    })
}

exports.createpathology_category = (req,res)=>{
    const categorydata = new pathology_category(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        pathology_category.createpathology_category(categorydata,(err,category)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'pathology_category added successfully',data:category.insertId});
        })
}
}