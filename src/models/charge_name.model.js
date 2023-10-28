var dbconn = require('../../config/db.config');

var charge_name = function(charge){
    this.id = charge.id;

}

let query = ''
let values = ['']

charge_name.setvalues = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}

charge_name.get_charge_name = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else {
            console.log('charge_name fetched');
            result(null,res);
        }
    })
}

module.exports = charge_name;