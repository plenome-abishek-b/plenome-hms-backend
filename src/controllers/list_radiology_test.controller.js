var RadiologyTest = require('../models/list_radiology_test.model');

exports.getradiologytest = (req,res)=>{
    let updatedQuery = 'select radio.*, lab.lab_name,charges.standard_charge,tax_category.percentage from radio join lab on lab.id = radio.radiology_category_id join charges on charges.id = radio.charge_id join tax_category on tax_category.id = charges.tax_category_id;'
    let updatedvalues = [];

    RadiologyTest.setvalues(updatedQuery,updatedvalues);
    RadiologyTest.getradiologytest((err,RadiologyTest)=>{
        if(err)
        res.send(err);

        console.log('radiology test is needed',RadiologyTest);
        res.send(RadiologyTest);
    })
}

exports.createradiology = (req,res)=>{
    const radiologydata = new RadiologyTest(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.send({success:false,message:'add the details'});
    }else{
        RadiologyTest.createradiologytest(radiologydata,(err,radiology)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'radiology added successfullu',data:radiology.insertId});
            
        })
    }
}