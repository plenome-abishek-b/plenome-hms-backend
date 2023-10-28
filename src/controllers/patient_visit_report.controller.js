const patient_visit_reportmodel = require('../models/patient_visit_report.model');

exports.getpatient_visit_report = (req,res) =>{
    let updatedquery = ' ';
    let updatedvalues = [];

    if(req.query.patient_ID) {
        updatedquery = 'call plenome_HMS.patientVisitReport(2)';
        updatedvalues.push(req.query.patient_ID);
    }

    patient_visit_reportmodel.setquery(updatedquery,updatedvalues);
    patient_visit_reportmodel.getpatient_visit_report((err,patient_visit_report)=>{
        if(err) {
            res.send(err);
        }

        console.log('patient visit report',patient_visit_report);
        res.send(patient_visit_report);
    });
};