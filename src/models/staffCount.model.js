var dbConn = require('../../config/db.config');

var StaffCount = function(staffCount){
    this.id = staffCount.id
}

StaffCount.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue
}

StaffCount.getStaffCount = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('StaffCount  fetched ');
            result(null,res);
        }
    })
}

module.exports = StaffCount