var dbconn = require('../../config/db.config');
var staff_attendance_report = function(report){
    this.id = report.id;
};

let query = ''
let values = []
staff_attendance_report.setquery = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}

staff_attendance_report.getstaff_attendance_report = (result)=>{
    console.log(query,"1111111");
    console.log(values,"22222222222");
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured');
            result(null,err);
        }else{
            console.log('staff attendance report fetched');
            result(null,res);
        }
    })
}

module.exports = staff_attendance_report;