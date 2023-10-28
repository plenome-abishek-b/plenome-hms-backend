var dbconn = require('../../config/db.config');
var unit = function(units){
    this.id = units.id;
    this.unit_name = units.unit_name;
    this.unit_type = units.unit_type;
    this.created_at = units.created_at;
}

let query = '';
let values = ['']

unit.setvalues = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues
}

unit.getunit = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('unit fetched');
            result(null,res);

        }
    })
}


unit.createunit = (measure,result)=>{
    dbconn.query('insert into unit SET ?',measure,(err,res)=>{
        if(err){
            console.log('error while insertng data',err);
            result(null,err);
        
        }else{
            console.log('unit inserted successfully');
            result(null,res);
        }
    })
}

module.exports = unit;