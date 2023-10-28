var dbConn = require('../../config/db.config');
var Operation = function(operation){
    this.id = operation.id;
    this.opd_details_id = operation.opd_details_id;
    this.ipd_details_id = operation.ipd_details_id;
    this.customer_type = operation.customer_type;
    this.operation_id = operation.operation_id;
    this.date = operation.date;
    this.operation_type = operation.operation_type;
    this.consultant_doctor = operation.consultant_doctor;
    this.ass_consultant_1 = operation.ass_consultant_1;
    this.ass_consultant_2 = operation.ass_consultant_2;
    this.anesthetist = operation.anesthetist;
    this.anaethesia_type= operation.anaethesia_type;
    this.ot_technician = operation.ot_technician;
    this.ot_assistant = operation.ot_assistant;
    this.result = operation.result;
    this.remark = operation.remark;
    this.generated_by = operation.generated_by;
    this.created_at = operation.created_at;
}
Operation.createOperation = (operationData,result)=>{
    dbConn.query('insert into operation_theatre SET ?',operationData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('operation Data inserted Successfully');
            result(null,res)
        }
    });
}
Operation.getOperation = (result)=>{
    dbConn.query('select operation_theatre .* ,operation_category.category as o_category,operation.operation as o_name from operation_theatre join operation on operation.id = operation_theatre.operation_id join operation_category on operation.category_id = operation_category.id;',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('operation fetched ');
            result(null,res);
        }
    })
}
module.exports = Operation;