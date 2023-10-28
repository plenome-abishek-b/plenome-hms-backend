var dbconn = require('../../config/db.config');

var charge_category = function(charge){
    this.id = charge.id;
}

let query = ''
let values = ['']

charge_category.setvalues = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}

charge_category.get_charge_category = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        
        }else{
            console.log('charge_category fetched');
            result(null,res);
        }
    })

}

module.exports = charge_category;