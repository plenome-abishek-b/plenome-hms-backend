var dbConn = require('../../config/db.config');

var TpaReport = function(tpaReport){
    this.id = tpaReport.id;
}
let query = '';
let value = []
TpaReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}

TpaReport.GetTpaReport = (result)=>{
    console.log(value,"111111111111");
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Tpa Report fetched ');
            result(null,res);
        }
    })
}
module.exports = TpaReport