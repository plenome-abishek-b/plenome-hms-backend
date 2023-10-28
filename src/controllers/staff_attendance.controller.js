const staff_attendance_report_model = require('../models/staff_attendance.model');

exports.getstaff_attendance_report = (req,res)=>{
    let updatedquery ='call plenome_HMS.staffAttendance(?,?,?)';
    let updatedvalues = [];
   
    var a = 0;
    var b = 0;
    var c = 0;
    updatedvalues.push(a,b,c)
    
    if(req.query.role){
        updatedvalues[0] = req.query.role        
    }
    if(req.query.month){
        updatedvalues[1]  = req.query.month
      
    }
    if(req.query.year){
        updatedvalues[2] = req.query.year        
    }



    staff_attendance_report_model.setquery(updatedquery,updatedvalues);
    staff_attendance_report_model.getstaff_attendance_report((err,report)=>{
        if(err)
        res.send(err);

        console.log('staff_attendance fetched',report);
        res.send(report);
    })
}