var dbConn = require('../../config/db.config');
var Leave_type = function(leave_type){
    this.id=leave_type.id;
    this.type = leave_type.type;
    this.is_active = leave_type.is_active;
    this.created_at = leave_type.created_at
}
//create new leave type
Leave_type.create_leave = (leave_type_data,result)=>{
    dbConn.query('insert into leave_types  set ?',leave_type_data, (err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('leave type inserted Successfully');
            result(null,res)
        }
    });
}
// get leave type
Leave_type.get_leave = (result) =>{
    dbConn.query('SELECT * FROM leave_types',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('leave types  fetched ');
            result(null,res);
        }
    })
}



    module.exports = Leave_type;