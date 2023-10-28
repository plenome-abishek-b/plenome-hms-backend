var dbConn = require('../../config/db.config');
var Consultant_register = function(consultant_register){
    this.id = consultant_register.id;
    this.ipd_id = consultant_register.ipd_id;
    this.date = consultant_register.date;
    this.ins_date = consultant_register.ins_date;
    this.instruction = consultant_register.instruction;
    this.cons_doctor = consultant_register.cons_doctor;
    this.created_at = consultant_register.created_at;
}
Consultant_register.create_consultant_register = (consultant_register_data,result)=>{
    dbConn.query('insert into consultant_register set ?',consultant_register_data,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('consultant register Data inserted Successfully');
            result(null,res)
        }
    })
}

Consultant_register.get_consultant_register = (result)=>{
    dbConn.query('select consultant_register.*,staff.name,staff.surname from consultant_register join staff on consultant_register.cons_doctor = staff.id;',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('consultant_register fetched ');
            result(null,res);
        }
    })

}
module.exports = Consultant_register;