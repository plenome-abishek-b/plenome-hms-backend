var dbConn = require('../../config/db.config');

var PayrollReport = function(payrollReport){
    this.id = payrollReport.id;
}
let query = '';
let value = []
PayrollReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}

PayrollReport.GetPayrollReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Payroll Report  fetched ');
            result(null,res);
        }
    })
}
module.exports = PayrollReport