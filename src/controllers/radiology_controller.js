const RadiologyModel = require('../models/radiology_model');

exports.getRadiology = (req,res)=>{
   
    RadiologyModel.getRadiology((err,radiology)=>{
        if(err)
        res.send(err);

        console.log('radiology names ',radiology);
        res.send(radiology);
    })

} 