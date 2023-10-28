var dbcon = require('../../config/db.config');

var Leave = function (approved){
this.id = approved.id;
this.staff_id = approved.staff_id;
this.leave_type_id = approved.leave_type_id;
this.leave_from = approved.leave_from;
this.leave_to = approved.leave_to;
this.leave_days = approved.leave_days;
this.employee_remark = approved.employee_remark;
this.admin_remark = approved.admin_remark;
this.status = approved.status;
this.applied_by = approved.applied_by;
this.status_updated_by = approved.status_updated_by;
this.document_file = approved.document_file;
this.date = approved.date;
this.created_at = approved.created_at;
}

Leave.getleaverequest = (result)=>{
    dbcon.query('select * from staff_leave_request',(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('staffleaverequest fetched');
            result(null,res);
        }
        
    })
}

Leave.createleaverequest = (data,result)=>{
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

module.exports = Leave;