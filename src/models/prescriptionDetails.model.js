var dbConn = require('../../config/db.config');
 var PrescriptionDetails = function(prescriptionDetails){
    this.id = prescriptionDetails.id;
    this.basic_id = prescriptionDetails.basic_id;
    this.pharmacy_id = prescriptionDetails.pharmacy_id;
    this.dosage = prescriptionDetails.dosage;
    this.dose_interval_id = prescriptionDetails.dose_interval_id;
    this.dose_duration_id = prescriptionDetails.dose_duration_id;
    this.instruction = prescriptionDetails.instruction;
    this.created_at = prescriptionDetails.created_at;
 }

 PrescriptionDetails.getPrescription = (result)=>{
    dbConn.query('select * from ipd_prescription_details',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('ipd_prescription_details  fetched ');
            result(null,res);
        }
    })
}

PrescriptionDetails.getPrescriptionDetailsById = (basic_id,result)=>{
    dbConn.query('select * from ipd_prescription_details where basic_id=?',basic_id,(err,res)=>{
        if(err){
            console.log('Error occured while getting by id',err);
            result(null,err);
        }else{
            console.log('ipd_prescription_details fetched by id');
            result(null,res);
        }
})
}


PrescriptionDetails.createPrescription = (detailsData,result)=>{
    dbConn.query('insert into ipd_prescription_details SET ?',detailsData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('prescription details Data inserted Successfully');
            result(null,res)
        }
    
    });
}

module.exports = PrescriptionDetails;
