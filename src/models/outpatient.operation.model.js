var dbCon = require('../../config/db.config');

var PatientOperation = function(patientoperation) {
this.operation = patientoperation.operation;
this.category_id = patientoperation.category_id;
this.is_active = patientoperation.is_active;
this.created_at = patientoperation.created_at;
}




//Add new visits

PatientOperation.createPatientOperation = (patientReqData,result) =>{
    dbCon.query('INSERT INTO operation SET ?',patientReqData,(err,res)=>{
    if(err){
        console.log('Error while inserting data');
        console.log(err);
        result(null,err);
    }
    else{
        console.log('Patient operation created successfully')
        result(null,res);
    }
    })
    }


    //get all patients visits list

    PatientOperation.getAllOutPatientOperation = (result) => {
dbCon.query('SELECT * FROM operation',(err,res)=>{
if(err){
    console.log('Error while fetching patient operation',err);
    result(null,err);
}
else{
    console.log('Patient operation fetched successfully');
    result(null,res);
}
});
}



module.exports = PatientOperation;