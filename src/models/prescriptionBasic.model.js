var dbConn = require('../../config/db.config');
var PrescriptionBasic = function(prescriptionBasic){
    this.id = prescriptionBasic.id;
    this.ipd_id = prescriptionBasic.ipd_id;
    this.visit_details_id = prescriptionBasic.visit_details_id;
    this.header_note = prescriptionBasic.header_note;
    this.footer_note = prescriptionBasic.footer_note;
    this.finding_description = prescriptionBasic.finding_description;
    this.is_finding_print = prescriptionBasic.is_finding_print;
    this.date = prescriptionBasic.date;
    this.generated_by = prescriptionBasic.generated_by;
    this.prescribe_by = prescriptionBasic.prescribe_by;
    this.created_at = prescriptionBasic.created_at;
}
PrescriptionBasic.getPrescriptionBasic = (result)=>{

    dbConn.query('select * from ipd_prescription_basic ',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('ipd_prescription_basic fetched');
            result(null,res);
        }
    })
}


PrescriptionBasic.getPrescriptionBasicById = (id,result)=>{
    dbConn.query('select * from ipd_prescription_basic where id=?',id,(err,res)=>{
        if(err){
            console.log('Error occured while getting by id',err);
            result(null,err);
        }else{
            console.log('ipd_prescription_basic fetched by id');
            result(null,res);
        }
})
}


PrescriptionBasic.createPrescriptionBasic = (prescriptionData,result)=>{
    dbConn.query('insert into ipd_prescription_basic SET ?',prescriptionData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('prescription Data inserted Successfully');
            result(null,res)
        }
    
    });
}


module.exports= PrescriptionBasic