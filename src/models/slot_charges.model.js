var dbconn = require('../../config/db.config');

var slot_charges = function(charges){
    this.id = charges.id;
}

let query = ''
let values = ['']

slot_charges.setvalues = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;

}

slot_charges.get_slot_charges = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('charges fetched');
            result(null,res);
        }
    })
}

module.exports = slot_charges;