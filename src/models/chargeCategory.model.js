var dbConn = require('../../config/db.config');

var ChargeCategory = function(chargeCategory){
    this.id = chargeCategory.id;
    this.charge_type_id = chargeCategory.charge_type_id;
    this.name = chargeCategory.name;
    this.description = chargeCategory.description;
    this.short_code = chargeCategory.short_code;
    this.is_default = chargeCategory.is_default;
    this.created_at = chargeCategory.created_at;
}

ChargeCategory.createCharge= (chargeData,result)=>{
    dbConn.query('insert into charge_categories set ?',chargeData,(err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('charge_categories Data inserted Successfully');
            result(null,res)
        }
    })
}


ChargeCategory.getCharge= (result)=>{
    dbConn.query('select  charge_categories.*,charge_type_master.charge_type from charge_categories join charge_type_master on charge_type_master.id = charge_categories.charge_type_id',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('charge_categories  fetched ');
            result(null,res);
        }
    })
}

module.exports = ChargeCategory;
