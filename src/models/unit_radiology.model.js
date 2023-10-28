var dbconn = require('../../config/db.config');
var unit_radiology = function(units){
    this.id = units.id;
    this.unit_name = units.unit_name;
    this.unit_type = units.unit_type;
    this.created_at = units.created_at;
}

unit_radiology.getunit = (result)=>{
    dbconn.query('select * from unit where unit_type = "radio"',(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('radiology unit is fetched');
            result(null,res);
        }
    })
}

unit_radiology.createunit = (measurement,result)=>{
    dbconn.query('insert into unit SET ?',measurement,(err,res)=>{
        if(err){
            console.log('error while inserting data',err);
            result(null,err);
        }else{
            console.log('unit_radiology inserted successfully');
            result(null,res);
        }
    })
}

module.exports = unit_radiology;