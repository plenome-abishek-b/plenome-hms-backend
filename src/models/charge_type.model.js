var dbconn = require('../../config/db.config');
var charge_type = function(charge){
    this.id = charge.id;

}

charge_type.getcharge_type = (result)=>{
    dbconn.query('select * from charge_type_master',(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,res);
    
        }else{
            console.log('charge_type fetched');
            result(null,res);
        }
    })
}

module.exports = charge_type;