var dbconn = require('../../config/db.config');

var patient_visit_report = function(report){
    this.id = report.id;
};

let query = '';
let value = [];

patient_visit_report.setquery = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    value = updatedvalues;
};

patient_visit_report.getpatient_visit_report = (result)=>{
    dbconn.query(query,value,(err,res)=>{
        if (err) {
            console.log('error occurred', err);
            result(null, err);
          } else {
            console.log('patient visit report fetched');
            result(null, res);
          }
    });
};

module.exports = patient_visit_report;