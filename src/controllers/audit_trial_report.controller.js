const audit_trial_reportmodel = require('../models/audit_trial_report.model');

exports.getaudit_trial_report = (req,res)=>{
    let updatedquery = 'select logs.message, concat(staff.name," ",staff.surname,"(",staff.employee_id,")" ) as users, logs.ip_address,logs.action,logs.platform,logs.agent,logs.time from logs left join staff on logs.user_id = staff.id '
    let updatedvalue = []

    if(req.query.search){
        updatedquery += ' where logs.message like ? or logs.user_id like ? or logs.action like ? or logs.ip_address like ? or logs.platform like ?';
        updatedvalue.push('%'+req.query.search+'%');  
        updatedvalue.push('%'+req.query.search+'%');
        updatedvalue.push('%'+req.query.search+'%');
        updatedvalue.push('%'+req.query.search+'%');
        updatedvalue.push('%'+req.query.search+'%');
    }

    audit_trial_reportmodel.setquery(updatedquery,updatedvalue);
    audit_trial_reportmodel.getaudit_trial_report((err,audit_trial_report)=>{
        if(err)
        res.send(err);

        console.log('audit trial report',audit_trial_report);
        res.send(audit_trial_report);
    })
}