const categoryModel = require('../models/medicineCategory.model');


exports.getCategory= (req,res)=>{
    categoryModel.getcategory ((err,med)=>{
        if(err)
        res.send(err);
     
        console.log('category Model ',med);
        res.send(med);
    })

}