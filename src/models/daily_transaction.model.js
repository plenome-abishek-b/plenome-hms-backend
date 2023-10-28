var dbconn = require('../../config/db.config');

var daily_transaction_report = function(report){
    this.id = report.id;
};

let query = '';
let value = [];

daily_transaction_report.setquery = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
};

daily_transaction_report.getdaily_transaction_report = (result)=>{
    dbconn.query(query,value,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('daily transaction report fetched');
            result(null,res);
        }
    });
};


module.exports = daily_transaction_report;