var dbconn = require('../../config/db.config');

var patient_bill_report = function(report) {
  this.id = report.id;
};

let query = '';
let value = [];

patient_bill_report.setquery = (updatedquery, updatedvalues) => {
  query = updatedquery;
  value = updatedvalues;
};

patient_bill_report.getpatient_bill_report = (result) => {
  dbconn.query(query, value, (err, res) => {
    if (err) {
      console.log('error occurred', err);
      result(null, err);
    } else {
      console.log('patient bill report fetched');
      result(null, res);
    }
  });
};

module.exports = patient_bill_report;
