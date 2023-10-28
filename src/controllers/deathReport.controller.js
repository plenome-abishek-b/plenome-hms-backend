const DeathReportModel = require('../models/deathReport.model')

exports.GetDeathReport = (req,res)=>{
    let updatedQuery = ' select concat("DRRN",death_report.id) as reference_no,death_report.case_reference_id,death_report.guardian_name,death_report.death_date,concat(patients.patient_name," ","(",patients.id,")") as patients_name,patients.gender,death_report.death_report from death_report join patients on  patients.id = death_report.patient_id where death_report.id '
    let updatedValues = []

    if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += 'and date(death_report.death_date ) = curdate()';
                break;
            }
            case 'This Week' : 
            {
                updatedQuery += 'and year(death_report.death_date ) = year(now()) and week(death_report.death_date ) = week(now()) ';
                break;
            }
            case 'Last Week' :
                {
                    updatedQuery += 'and year(death_report.death_date ) =year(now()) and week(death_report.death_date ) = week(now())-1';
                    break;
                }
            case 'This Month' :
                {
                    updatedQuery += 'and year(death_report.death_date ) = year(curdate()) and month(death_report.death_date ) = month(curdate())';
                    break;
                }
            case 'Last Month' :
                {
                    updatedQuery += 'and year(death_report.death_date ) = year(date_sub(now(),interval 1 month)) and month(death_report.death_date ) = month(date_sub(now(),interval 1 month))'
                }
            case 'Last 3 Months' :
                {
                    updatedQuery += 'and year(death_report.death_date ) = year(date_sub(now(),interval 3 month)) and month(death_report.death_date ) = month(date_sub(now(),interval 3 month))'
                    break;
                }
            case 'Last 6 Months' :
                {
                    updatedQuery += 'and year(death_report.death_date ) = year(date_sub(now(),interval 6 month)) and month(death_report.death_date ) = month(date_sub(now(),interval 6 month))'
                    break;
                }
            case 'Last 9 Months' :
                {
                    updatedQuery += 'and year(death_report.death_date ) = year(date_sub(now(),interval 9 month)) and month(death_report.death_date ) = month(date_sub(now(),interval 9 month))'
                    break;
                }
            case 'Last 12 Months' :
                {
                    updatedQuery += 'and year(death_report.death_date ) = year(date_sub(now(),interval 12 month)) and month(death_report.death_date ) = month(date_sub(now(),interval 12 month))'
                    break;
                }
            case 'This Year' :
                {
                    updatedQuery += 'and year(death_report.death_date ) = year(now())'
                    break;
                }
            
            case 'Last Year' :
                {
                    updatedQuery += 'and year(death_report.death_date ) = year(now()) - 1 '
                    break;
                }
            case 'Period' :
                {
                    if(req.query.fromDate){
                        updatedQuery += ' and date(death_report.death_date) >= ?' 
                        updatedValues.push(req.query.fromDate)
            
                    }
                    if(req.query.ToDate){
                        updatedQuery += ' and date( death_report.death_date) <= ?' 
                        updatedValues.push(req.query.ToDate)
            
                    }
                }
           
                }

        }

        if(req.query.gender){
            updatedQuery += ' and patients.gender = ? '
            updatedValues.push(req.query.gender)
        }

        DeathReportModel.setQuery(updatedQuery,updatedValues);
        DeathReportModel.GetDeathReport((err,death_report)=>{
            if(err)
            res.send(err);
    
            console.log('Death Report  ',death_report);
            res.send(death_report);
        })


}