var dbconn = require('../../config/db.config');
var audit_trial_report = function(report){
    this.id = report.id;
}

let query = ''
let value = []
audit_trial_report.setquery = (updatedquery,updatedvalue)=>{
    query = updatedquery;
    value = updatedvalue;
}

audit_trial_report.getaudit_trial_report = (result)=>{
    dbconn.query(query,value,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);       
         }else{
            console.log('logs table fetched');
            result(null,res);
         }

    })
}

module.exports = audit_trial_report;