const OperationCategoryModel = require('../models/operationCategory.model');


exports.getCategory= (req,res)=>{
    OperationCategoryModel.getCategory((err,category)=>{
        if(err)
        res.send(err);
     
        console.log('category ',category);
        res.send(category);
    
    })
}