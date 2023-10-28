var dbConn = require('../../config/db.config');

var PayrollMonthReport = function(payrollMonthReport){
    this.id = payrollMonthReport.id
}

let query = '';
let value = []
PayrollMonthReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}

PayrollMonthReport.GetPayrollMonthReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Payroll month Report  fetched ');
            result(null,res);
        }
    })
}
module.exports = PayrollMonthReport