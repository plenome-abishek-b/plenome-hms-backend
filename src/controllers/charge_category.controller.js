var charge_category = require('../models/charge_category.model');

exports.get_charge_category = (req,res)=>{
    let updatedquery = 'select * from charge_categories '
    let updatedvalues = [];

    if(req.query.search){
         updatedquery = 'select * from charge_categories where charge_type_id = ?'
        updatedvalues.push(req.query.search);
    }

    charge_category.setvalues(updatedquery,updatedvalues);
    charge_category.get_charge_category((err,category)=>{
        if(err)
        res.send(err);

        console.log('charge_category is needed',category);
        res.send(category);
    })
}