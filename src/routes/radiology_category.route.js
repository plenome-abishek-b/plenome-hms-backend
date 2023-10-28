const radiology_category = require('../models/radio_category.model');
exports.get_radiology_category = (req,res)=>{

    radiology_category.get_radiology_category((err,category)=>{
        if(err)
        res.send(err);

        console.log('radiology_category generated',category);
        res.send(category);
    })
}

exports.create_radiology_category = (req,res)=>{
    console.log(req.body,"bodyv")
    const radiologydata = new radiology_category(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.send({success:false,message:'fill the fields'});
    }else{
        radiology_category.create_radiology_category(radiologydata,(err,category)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'radiology_category added successfully',data:category.insertId});
        })
    }
}