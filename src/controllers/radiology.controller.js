const radiologyBillingModel = require('../models/radiology.model');

exports.createRadiologyBilling = (req,res)=>{
    const radiologyData = new radiologyBillingModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        radiologyBillingModel.createRadiologyBilling(radiologyData,(err,radiology)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' operation added successfully',data:radiology.insertId});

        })
    }
}
exports.updateRadiologyBilling = (req,res)=>{

    let updatedQuery = '';
    let updatedValues = []

    if(req.query.id){
        updatedQuery = 'update radiology_billing SET ? where id = ?'
        updatedValues.push(req.query.id)
    }
radiologyBillingModel.setQuery(updatedQuery,updatedValues)
    const radiologyData = new radiologyBillingModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        radiologyBillingModel.updateRadiologyBilling(radiologyData,(err,radiology)=>{
            if(err){
            res.send(err);
        }else{
            if(radiologyData.id == updatedValues[0]){

                res.json({status:true,message:' radiology updated successfully',data:radiologyData.id});
            }
            else{
                res.json({status:false,message:'the id of the post value and the id given must be same'})
            }

        }
        })
    }
}

exports.getRadiologyBilling = (req,res)=>{
    radiologyBillingModel.getRadiologyBilling((err,radiology)=>{
        if(err)
    res.send(err);
 
    console.log('radiology ',radiology);
    res.send(radiology);
    })
}