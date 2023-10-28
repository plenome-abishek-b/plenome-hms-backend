var dbConn = require('../../config/db.config');

var UnitType = function(unitType){
    this.id = unitType.id;
    this.unit = unitType.unit;
    this.is_active = unitType.is_active;
    this.created_at = unitType.created_at;
}

UnitType.createUnitType = (typeData,result)=>{
    dbConn.query('insert into charge_units set ?',typeData,(err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('Unit type inserted Successfully');
            result(null,res)
        }
    })
}

UnitType.getUnitType= (result)=>{
    dbConn.query('select * from charge_units',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('charge_units  fetched ');
            result(null,res);
        }
    })
}
module.exports = UnitType;
