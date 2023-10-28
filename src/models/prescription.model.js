var dbConn = require('../../config/db.config');
 Prescription = function(prescription){
    let basic = {
   id:prescription.id,
   ipd_id:prescription.ipd_id,
   visit_details_id:prescription.visit_details_id,
   header_note:prescription.header_note,
   footer_note:prescription.footer_note,
   finding_description:prescription.finding_description,
   is_finding_print:prescription.is_finding_print,
   date:prescription.date,
   generated_by:prescription.generated_by,
   prescribe_by:prescription.prescribe_by,
   created_at:prescription.created_at
};
let details = {
    id:prescription.details_id,
    basic_id:prescription.basic_id,
    pharmacy_id:prescription.pharmacy_id,
    dosage:prescription.dosage,
    dose_interval_id:prescription.dose_interval_id,
    dose_duration_id:prescription.dose_duration_id,
    instruction:prescription.instruction,
    created_at:prescription.created_at
}
}

Prescription.getPrescription = (result)=>{
    dbConn.query('select * from ipd_prescription_basic join ipd_prescription_details on ipd_prescription_basic.id = ipd_prescription_details.basic_id',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('prescription  fetched ');
            result(null,res);
        }
    })
}



module.exports = Prescription;