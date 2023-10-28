var dbConn = require('../../config/db.config');
var Finding = function(finding){
    this.id = finding.id;
}
let query = 'select * from finding ';
let value = [];
Finding.setQuery = (updatedQuery,updatedValue)=>{
    query=updatedQuery;
    value=updatedValue
}
Finding.getFinding = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Finding  fetched ');
            result(null,res);
        }
    })
}
module.exports = Finding;