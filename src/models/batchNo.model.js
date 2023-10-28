var dbConn = require('../../config/db.config');

var BatchNo = function(batchNo){
    this.id = batchNo.id;
}
let query = 'select * from medicine_batch_details ';
let value = [];
BatchNo.setQuery = (updatedQuery,updatedValue)=>{
    query=updatedQuery;
    value=updatedValue
}

BatchNo.getBatch= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('BatchNo details  fetched ');
            result(null,res);
        }
    })
}
module.exports = BatchNo;