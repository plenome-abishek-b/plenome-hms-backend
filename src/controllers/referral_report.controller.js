const referral_report_model = require('../models/referral_report.model');

exports.getreferral_report = (req,res)=>{
    let updatedquery = 'select referral_person.name,patients.patient_name, referral_payment.billing_id,referral_payment.bill_amount,referral_payment.percentage,referral_payment.amount from referral_payment join referral_person on referral_person.id = referral_payment.referral_person_id join patients on patients.id = referral_payment.patient_id where referral_payment.id '
    let updatedvalues = [];

   if(req.query.payee){
    updatedquery += 'and referral_person.name = ?'
    updatedvalues.push(req.query.payee)
   }

   if(req.query.patient_type){
    updatedquery += 'and referral_payment.referral_type = ?'
    updatedvalues.push(req.query.patient_type);
   }

   if(req.query.patient){
    updatedquery += 'and patients.id = ?'
    updatedvalues.push(req.query.patient)
   }


    referral_report_model.setquery(updatedquery,updatedvalues);
    referral_report_model.getreferral_report((err,referral_report)=>{
        if(err)
        res.send(err);

        console.log('referral_payment fetched',referral_report);
        res.send(referral_report);
    })


}