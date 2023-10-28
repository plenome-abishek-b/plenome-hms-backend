var dbConn = require('../../config/db.config');
var DosageDuration = function(dosageDuration){
    this.id = dosageDuration.id;
    this.name = dosageDuration.name;
   
    this.created_at = dosageDuration.created_at;
}

DosageDuration.createDosageDuration = (durationData,result)=>{
    dbConn.query('insert into dose_duration set ?',durationData,(err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('duration Data inserted Successfully');
            result(null,res)
        }
    })
}
DosageDuration.getDosageDuration= (result)=>{
    dbConn.query('select * from dose_duration',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('dose_duration  fetched ');
            result(null,res);
        }
    })
}
module.exports = DosageDuration;