var dbconn = require('../../config/db.config');
var referral_report = function(report){
    this.id = report.id;
}

let query = ''
let values = []
referral_report.setquery = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}

referral_report.getreferral_report = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        console.log(query,"mmmmmmmmmmmmmmmmmmmmmmmmmmm");
        console.log(values,"nnnnnnnnnnnnnnnnnnnnnnnnnnnn");
        if(err){
            console.log('error occured');
            result(null,err);
        }else{
            console.log('referral_report fetched');
            result(null,res);
        }
    })
}

module.exports = referral_report;