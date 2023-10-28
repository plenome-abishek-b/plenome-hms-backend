var dbConn = require('../../config/db.config');
var Staff_designation = function(staff_designation){
    this.id = staff_designation.id;
    this.designation = staff_designation.designation;
    this.is_active = staff_designation.is_active;
    this.created_at = staff_designation.created_at;
}
Staff_designation.create_designation =(staff_designation_data,result)=>{
    dbConn.query('insert into staff_designation set ?',staff_designation_data,(err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('staff designation inserted Successfully');
            result(null,res)
        }
    });
}
Staff_designation.get_designation = (result)=>{
    dbConn.query('SELECT * FROM staff_designation',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('staff designation  fetched ');
            result(null,res);
        }
    })
}

module.exports = Staff_designation;