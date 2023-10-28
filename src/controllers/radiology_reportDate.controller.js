const ReportDateModel = require('../models/reportDate.model');

exports.getDate=(req,res)=>{
    let updatedQuery = ''
    let updatedValue = [];

    if(req.query.reportDays){
        updatedQuery = ' SELECT DATE_ADD(CURDATE(), INTERVAL ?+1 DAY) AS report_date'
        updatedValue.push(req.query.reportDays);
    }

    ReportDateModel.setQuery(updatedQuery,updatedValue);
    ReportDateModel.getDate((err,date)=>{
        if(err)
        res.send(err);

        res.send(date);
    })


}