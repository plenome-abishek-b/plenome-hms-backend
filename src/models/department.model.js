var dbConn = require('../../config/db.config');
var Department = function (department){
    this.id = department.id;
    this.department_name = department.department_name;
    this.is_active = department.is_active;
    this.created_at = department.created_at;
}

Department.createDepartment = (departmentData,result)=>{
    dbConn.query('insert into department  set ?',departmentData,(err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('department inserted Successfully');
            result(null,res)
        }
    })
}

Department.getDepartment=(result)=>{
    dbConn.query('select * from department',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('department  fetched ');
            result(null,res);
        }
    })
}

module.exports = Department;