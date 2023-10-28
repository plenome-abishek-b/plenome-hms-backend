var dbConn = require('../../config/db.config');

var ExpensesReport = function(expensesReport){
    this.id = expensesReport.id
}

let query = '';
let value = []
ExpensesReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}


ExpensesReport.GetExpensesReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log(query+"gssssgsgs");
            console.log(value);
            console.log('Expenses Report fetched ');
            result(null,res);
        }
    })
}
module.exports = ExpensesReport