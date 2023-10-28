const slot_charge_category = require('../models/slot_charge_category.model');
exports.getslot_charge_category = (req,res)=>{

    slot_charge_category.getslot_charge_category((err,slot)=>{
        if(err)
        res.send(err);

        console.log('charge category generated',slot);
        res.send(slot);
    })
}