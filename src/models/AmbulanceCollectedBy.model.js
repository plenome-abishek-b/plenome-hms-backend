var dbConn = require('../../config/db.config');

var AmbulanceCollectedBy = function(ambulanceCollectedBy){
    this.id = ambulanceCollectedBy.id;
}

AmbulanceCollectedBy.getcollectedBy= (result)=>{
    dbConn.query('select staff.id,staff.name,staff_roles.staff_id,staff_roles.role_id,roles.name as role_name from staff join staff_roles on staff_roles.staff_id = staff.id join roles on  roles.id = staff_roles.role_id  where role_id = 7',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Ambulance Collected By fetched ');
            result(null,res);
        }
    })
}
module.exports = AmbulanceCollectedBy