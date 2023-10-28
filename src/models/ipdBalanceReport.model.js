var dbConn = require('../../config/db.config');

var IpdBalanceReport = function(ipdBalanceReport){
    this.id = ipdBalanceReport.id;
}
let query = '';
let value = []
IpdBalanceReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}
IpdBalanceReport.GetIpdBalanceReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Ipd Balance Report fetched ');
            result(null,res);
        }
    })
}
module.exports = IpdBalanceReport