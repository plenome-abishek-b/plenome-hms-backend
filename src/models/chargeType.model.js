var dbConn = require('../../config/db.config');

var ChargeType = function(chargeType){
    this.id = chargeType.id;
    this.charge_type = chargeType.charge_type;
    this.is_default = chargeType.is_default;
    this.is_active = chargeType.is_active;
    this.created_at = chargeType.created_at;
}

ChargeType.createChargeType = (typeData,result)=>{
    dbConn.query('insert into charge_type_master set ?',typeData,(err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('charge type inserted Successfully');
            result(null,res)
        }
    })
}

ChargeType.getChargeType= (result)=>{
    dbConn.query('select * from charge_type_master',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('charge_type_master  fetched ');
            result(null,res);
        }
    })
}
module.exports = ChargeType;
