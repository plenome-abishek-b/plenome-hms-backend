var dbconn = require('../../config/db.config');
var payroll_report = function(report){
    this.id = report.id;
}

let query = ''
let values = []
payroll_report.setquery = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}

payroll_report.getpayroll_report = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured');
            result(null,err);
        }else{
            console.log('staff_payslip report fetched');
            result(null,res);
        }
    })
}

module.exports = payroll_report;