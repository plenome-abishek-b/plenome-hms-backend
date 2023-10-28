var dbConn = require('../../config/db.config');
var MedicineDosage = function(dosageDuration){
    this.id = dosageDuration.id;
    this.medicine_category = dosageDuration.medicine_category;
    this.created_at = dosageDuration.created_at;
}


MedicineDosage.createMedicineDosage= (medicineDosageData,result)=>{
    dbConn.query('insert into medicine_category set ?',medicineDosageData,(err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('dosage Data inserted Successfully');
            result(null,res)
        }
    })
}

MedicineDosage.getMedicineDosage= (result)=>{
    dbConn.query('select * from medicine_category',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('dose_duration  fetched ');
            result(null,res);
        }
    })
}
module.exports = MedicineDosage;