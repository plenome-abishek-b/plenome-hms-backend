var PathologyTest = require('../models/pathology.test.model');

exports.getpathologytest = (req,res)=>{
    let updatedQuery = 'select pathology.*,pathology_category.category_name,tax_category.percentage,charges.standard_charge from pathology join pathology_category on pathology.pathology_category_id = pathology_category.id join charges on charges.id = pathology.charge_id join tax_category on tax_category.id = charges.tax_category_id'
    let updatedValues = [];
    
    PathologyTest.setValues(updatedQuery,updatedValues);
    PathologyTest.getpathologytest((err,pathologytest)=>{
        if(err)
        res.send(err);

        console.log('pathology test is needed',pathologytest);
        res.send(pathologytest);
    })
}

exports.createpathology = (req,res)=>{
    const pathologydata = new PathologyTest(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.send({success:false,message:'add the details'});
    }else{
        PathologyTest.createpathologytest(pathologydata,(err,pathology)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'pathology added successfully',data:pathology.insertId});
            
        })
    }
}