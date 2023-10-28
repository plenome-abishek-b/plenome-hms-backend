const patient_bill_reportmodel = require('../models/patient_bill_report.model');

exports.getpatient_bill_report = (req, res) => {
  let updatedquery = '';
  let updatedvalue = [];

  if (req.query.case_ID) {
    updatedquery = 'call plenome_HMS.patientBillReport(?)';
    updatedvalue.push(req.query.case_ID);
  }

  patient_bill_reportmodel.setquery(updatedquery, updatedvalue);
  patient_bill_reportmodel.getpatient_bill_report((err, patient_bill_report) => {
    if (err) {
      res.send(err);
    }

    console.log('patient bill report', patient_bill_report);
    res.send(patient_bill_report);
  });
};
