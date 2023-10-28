var dbConn = require('../../config/db.config');
var PrescriptionTest = function(prescriptionTest){
    this.id = prescriptionTest.id;
    this.ipd_prescription_basic_id = prescriptionTest.ipd_prescription_basic_id;
    this.pathology_id = prescriptionTest.pathology_id;
    this.radiology_id = prescriptionTest.radiology_id;
    this.created_at = prescriptionTest.created_at
}
PrescriptionTest.getPrescriptionTest = (result)=>{

    dbConn.query('select * from ipd_prescription_test',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('ipd_prescription_test  fetched ');
            result(null,res);
        }
    })
}

PrescriptionTest.createPrescriptionTest = (prescriptionData,result)=>{
    dbConn.query('insert into ipd_prescription_test SET ?',prescriptionData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('ipd_prescription_test Data inserted Successfully');
            result(null,res)
        }
    
    });
}
module.exports=PrescriptionTest;