var dbConn = require('../../config/db.config');
var Specialist = function(specialist){
    this.id = specialist.id;
    this.specialist_name = specialist.specialist_name;
    this.is_active = specialist.is_active;
    this.created_at = specialist.created_at;
}
Specialist.createSpecialist = (specialistData,result)=>{
    dbConn.query('insert into specialist set ?',specialistData,(err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('specialist inserted Successfully');
            result(null,res)
        }
    })
}

Specialist.getSpecialist = (result)=>{
    dbConn.query('select * from specialist',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('specialist  fetched ');
            result(null,res);
        }
    })
}
module.exports = Specialist;
