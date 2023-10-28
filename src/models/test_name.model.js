var dbconn = require('../../config/db.config');

var test_name = function(test){
    this.id = test.id;

}

let query = ''
let values = ['']

test_name.setvalues = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}

test_name.get_test_name = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('test name fetched');
            result(null,res);
        }
    })
}

module.exports = test_name;