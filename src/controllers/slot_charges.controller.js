var slot_charges = require('../models/slot_charges.model');

exports.get_slot_charges = (req,res)=>{
    let updatedquery = 'select * from charges'
    let updatedvalues = [];

    if(req.query.id){
        updatedquery = 'select * from charges where charge_category_id = ?'
        updatedvalues.push(req.query.id);
    }

    slot_charges.setvalues(updatedquery,updatedvalues);
    slot_charges.get_slot_charges((err,charges)=>{
        if(err)
        res.send(err);

        console.log('charges is needed',charges);
        res.send(charges);
    })
}