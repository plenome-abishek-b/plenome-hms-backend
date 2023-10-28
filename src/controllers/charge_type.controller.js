const charge_type = require('../models/charge_type.model');
exports.getcharge = (req,res)=>{

    charge_type.getcharge_type((err,type)=>{
        if(err)
        res.send(err);

        console.log('charge type generated',type);
        res.send(type);
    })
}