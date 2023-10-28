var dbConn = require('../../config/db.config');

var TransactionReport = function(transactionReport){
    this.id = transactionReport.id;
}
let query = '';
let value = []
TransactionReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}

TransactionReport.GetTransactions= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Transaction Report fetched ');
            result(null,res);
        }   
    })
}
module.exports = TransactionReport