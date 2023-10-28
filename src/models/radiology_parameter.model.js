var dbconn = require('../../config/db.config');
var radiology_parameter = function(params){
    this.id = params.id;
    this.parameter_name = params.parameter_name;
    this.test_value = params.test_value;
    this.reference_range = params.reference_range;
    this.gender = params.gender;
    this.unit = params.unit;
    this.description = params.description;
    this.created_at = params.created_at;
}

radiology_parameter.getparameter = (result)=>{
    dbconn.query('select * from radiology_parameter',(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,res);
        }else{
            console.log('radiology_parameter fetched');
            result(null,res);
        }
    })
}

radiology_parameter.createparameter = (parameter,result)=>{
    dbconn.query('insert into radiology_parameter SET ?',parameter,(err,res)=>{
        if(err){
            console.log('error while inserting data',err);
            result(null,err);
        }else{
            console.log('radiology parameter inserted successfully');
            result(null,res);
        }
    })
}

module.exports = radiology_parameter;