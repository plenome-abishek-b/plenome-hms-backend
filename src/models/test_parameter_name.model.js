var dbconn = require('../../config/db.config');

var test_parameter_name = function(parameter){
    this.id = parameter.id;
}

let query = ''
let values = ['']

test_parameter_name.setvalues = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}

test_parameter_name.get_test_parameter_name = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('test_parameter fetched');
            result(null,res);
        }
    })
}
module.exports = test_parameter_name;	