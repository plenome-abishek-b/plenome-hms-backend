var dbConn = require('../../config/db.config');
var OperationName = function(operationName){
    this.id = operationName.id;
}

let query = 'select * from operation_category';
let values = [];

OperationName.setQuery = (updatedQuery,updatedValue)=>{
    query=updatedQuery;
    values = updatedValue;
}

OperationName.getName= (result)=>{

    dbConn.query(query,values,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('OperationName  fetched ');
            result(null,res);
        }
    })
}
module.exports=OperationName;