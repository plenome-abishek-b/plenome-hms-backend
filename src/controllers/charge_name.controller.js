var charge_name = require('../models/charge_name.model');

exports.get_charge_name = (req,res)=>{
    let updatedquery = 'select * from charges'
    let updatedvalues = [];

    if(req.query.search){
        updatedquery = 'select * from charges where charge_category_id = ?'
        updatedvalues.push(req.query.search);
    }

    charge_name.setvalues(updatedquery,updatedvalues);
    charge_name.get_charge_name((err,name)=>{
        if(err)
        res.send(err);

        console.log('charge_name is needed',name);
        res.send(name);
    })
}