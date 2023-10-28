var dbConn = require('../../config/db.config');

var IncomeReport = function(incomeReport){
    this.id = incomeReport.id
}

let query = '';
let value = []
IncomeReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}


IncomeReport.GetIncomeReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Income Report fetched ');
            result(null,res);
        }
    })
}
module.exports = IncomeReport