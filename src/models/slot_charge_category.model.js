var dbconn = require('../../config/db.config');
var slot_charge_category = function(slot){
    this.id = slot.id;
}

slot_charge_category.getslot_charge_category = (result)=>{
    dbconn.query('select * from charge_categories',(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,res);
        }else{
            console.log('charge category fetched');
            result(null,res);
        }
    })
}

module.exports = slot_charge_category;