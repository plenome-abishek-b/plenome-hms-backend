var dbConn = require('../../config/db.config');

var OpdBalanceReport = function(opdBalanceReport){
    this.id = opdBalanceReport.id;
}
let query = '';
let value = []
OpdBalanceReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}

OpdBalanceReport.GetOpdBalanceReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Opd Balance Report fetched ');
            result(null,res);
        }
    })
}
module.exports = OpdBalanceReport