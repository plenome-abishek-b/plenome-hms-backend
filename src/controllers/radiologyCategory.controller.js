const RadiologyCategory = require('../models/radiologyCategory.model')

exports.getRadioCategory = (req,res)=>{
    RadiologyCategory.getRadipCategory((err,radioCategory)=>{

      
        if(err)
        res.send(err);
     
        console.log('radioCategory ',radioCategory);
        res.send(radioCategory);
    
    })
}