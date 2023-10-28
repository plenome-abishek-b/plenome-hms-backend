var dbConn = require('../../config/db.config');
var DosageInterval = function(dosageInterval){
    this.id = dosageInterval.id;
    this.name = dosageInterval.name;
   
    this.created_at = dosageInterval.created_at;
}

DosageInterval.createDosageInterval = (intervalData,result)=>{
    dbConn.query('insert into dose_interval set ?',intervalData,(err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('dose_interval Data inserted Successfully');
            result(null,res)
        }
    })
}
DosageInterval.getDosageInterval= (result)=>{
    dbConn.query('select * from dose_interval',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('dose_interval  fetched ');
            result(null,res);
        }
    })
}
module.exports = DosageInterval;