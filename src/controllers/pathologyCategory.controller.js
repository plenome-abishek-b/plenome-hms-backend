const PathologyCategoryModel = require('../models/pathologyCategory.model')
exports.getPathoCategory = (req,res)=>{
    PathologyCategoryModel.getPathoCategory((err,pathoCategory)=>{

      
        if(err)
        res.send(err);
     
        console.log('Pathology Category ',pathoCategory);
        res.send(pathoCategory);
    
    })
}