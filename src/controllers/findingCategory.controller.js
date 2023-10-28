const FindingCategoryModel = require('../models/findingCategory.model');
exports.getFindingCategory = (req,res)=>{
   
    FindingCategoryModel.getFindingCategory((err,findingCategory)=>{
        if(err)
        res.send(err);

        console.log('findingCategory names ',findingCategory);
        res.send(findingCategory);
    })

} 