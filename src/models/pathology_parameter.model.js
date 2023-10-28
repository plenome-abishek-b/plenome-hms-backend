var dbconn = require('../../config/db.config');
var pathology_parameter = function(params){
    this.id = params.id;
    this.parameter_name = params.parameter_name;
    this.test_value = params.test_value;
    this.reference_range = params.reference_range;
    this.gender = params.gender;
    this.unit = params.unit;
    this.description = params.description;
    this.created_at = params.created_at;
}

pathology_parameter.getparameter = (result)=>{
    dbconn.query('select  pathology_parameter.*,unit.unit_name from pathology_parameter join unit on unit.id = pathology_parameter.unit',(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,res);
        }else{
            console.log('pathology_parameter fetched');
            result(null,res);
        }
    })
}

pathology_parameter.createparameter = (parameter,result)=>{
    dbconn.query('insert into pathology_parameter SET ?',parameter,(err,res)=>{
        if(err){
            console.log('error while inserting data',err);
            result(null,err);
        
        }else{
            console.log('pathology parameter inserted successfully');
            result(null,res);
        }
    })
}

module.exports = pathology_parameter;