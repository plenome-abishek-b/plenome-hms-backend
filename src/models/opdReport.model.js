var dbConn = require('../../config/db.config');

var OpdReport = function(opdReport){
    this.id = opdReport.id
}
let query = '';
let value = []
OpdReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}
OpdReport.GetOpdReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('opd Report fetched ');
            result(null,res);
        }
    })
}
module.exports = OpdReport