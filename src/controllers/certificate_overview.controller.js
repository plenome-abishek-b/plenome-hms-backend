const certificate_model = require('../models/certificate_overview.model');

exports.getcertificate = (req,res)=>{
    let updatedquery = ' ';
    let updatedvalues = [];

    if(req.query.module == 1){

        updatedquery = 'select concat("OPDN",opd_details.id) opdId,concat("OCID",visit_details.id) checkupId,patients.patient_name,patients.dob,concat(patients.age," Year ",patients.month," Month ",patients.day," Days " ) age, patients.gender,patients.mobileno,patients.guardian_name,patients.address,concat(staff.name," ",staff.surname," (",staff.employee_id,")") doctor, opd_details.discharged,certificates.* from opd_details join visit_details on opd_details.id = visit_details.opd_details_id join patients on opd_details.patient_id = patients.id join staff on staff.id = visit_details.cons_doctor cross join  certificates  where opd_details.id  '
       ;

        if(req.query.certificateTemplate){
            updatedquery += ' and certificates.id = ? '
            updatedvalues.push(req.query.certificateTemplate)
        }
        if(req.query.status){
            updatedquery += ' and opd_details.discharged = ? '
            updatedvalues.push(req.query.status)
        }
        console.log(updatedquery,"11111111111");
        console.log(updatedvalues,"2222222222");


    }

    if(req.query.module == 2){
        updatedquery = 'select concat("IPDN",ipd_details.id) ipdNo, patients.patient_name, patients.dob, concat(patients.age," Year ",patients.month," Month ",patients.day," Days " ) age, patients.gender, patients.mobileno, patients.guardian_name, patients.address, concat(staff.name," ",staff.surname," (",staff.employee_id,")") doctor,ipd_details.discharged, certificates.* from ipd_details join patients on patients.id = ipd_details.patient_id join staff on staff.id = ipd_details.cons_doctor cross join certificates where ipd_details.id '
        ;

        if(req.query.certificateTemplate){
            updatedquery += ' and certificates.id = ? '
            updatedvalues.push(req.query.certificateTemplate)
        }

        if(req.query.status){
            updatedquery += '  and ipd_details.discharged = ? '
            updatedvalues.push(req.query.status)
        }

    }

    certificate_model.setquery(updatedquery,updatedvalues);
    certificate_model.getcertificate((err,certificates)=>{
        if(err)
        res.send(err);

        console.log('certificate fetched',certificates);
        res.send(certificates);
    })
}