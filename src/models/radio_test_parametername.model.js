var dbconn = require('../../config/db.config');

var test_parameter_name_radiology = function(parameter){
    this.id = parameter.id;
}

let query = ''
let values = ['']

test_parameter_name_radiology.setvalues = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}

test_parameter_name_radiology.get_test_parameter_name_radiology = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('test parameter name fetched');
            result(null,res);
        }
    })
}

module.exports = test_parameter_name_radiology;