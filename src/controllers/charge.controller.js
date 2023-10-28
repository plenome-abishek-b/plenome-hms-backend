const chargeModel = require('../models/charge.model');

exports.createCharge = (req,res)=>{
    const chargeData = new chargeModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        chargeModel.createCharge(chargeData,(err,charge)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' charge added successfully',data:charge.insertId});

        })
    }

}
exports.getCharge = (req,res)=>{

let updatedQuery = 'select patient_charges.*,charges.name,charge_categories.name as category_name,charge_type_master.charge_type from patient_charges join charges on charges.id = patient_charges.charge_id join charge_categories on charge_categories.id = charges.charge_category_id join charge_type_master on charge_type_master.id = charge_categories.charge_type_id '
let updatedValues = [];
if(req.query.ipd_id){
    updatedQuery +='where ipd_id = ?'
    updatedValues.push(req.query.ipd_id)    
}
chargeModel.setQuery(updatedQuery,updatedValues)
    chargeModel.getCharge((err,charge)=>{
        if(err)
    res.send(err);
 
    console.log('charge ',charge);
    res.send(charge);
    })
}

