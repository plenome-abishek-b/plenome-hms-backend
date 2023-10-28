var dbcon = require('../../config/db.config');

var list_leaves = function(list){
this.id = list.id;
this.staff_id = list.staff_id;
this.leave_type_id = list.leave_type_id;
this.leave_from = list.leave_from;
this.leave_to = list.leave_to;
this.leave_days = list.leave_days;
this.employee_remark = list.employee_remark;
this.admin_remark = list.admin_remark;
this.status = list.status;
this.applied_by = list.applied_by;
this.status_updated_by = list.status_updated_by;
this.document_file = list.document_file;
this.date = list.date;
this.created_at = list.created_at;
}

list_leaves.getleaves = (result)=>{
    dbcon.query('select * from staff_leave_request where staff_id = 1',(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('superAdminLeave fetched');
            result(null,res);
        }
        })
    }

    list_leaves.createleaves = (data,result)=>{
        dbcon.query('insert into staff_leave_request SET ?',data,(err,res)=>{
            if(err){
                console.log(err)
                console.log('error while inserting data');
                result(null,err);
            }else{
                console.log('data inserted successfully');
                result(null,res)
            }
        })
    }    

    module.exports = list_leaves;