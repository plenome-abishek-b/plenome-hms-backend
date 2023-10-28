const BirthReportModel = require('../models/birthReport.model')

exports.GetBirthReport = (req,res)=>{
    let updatedQuery = ' select concat("BRRN",birth_report.id)as reference_no,birth_report.case_reference_id as case_id,birth_report.child_name,birth_report.gender,birth_report.birth_date,birth_report.weight,concat(patients.patient_name," ","(",patients.id,")") as mother_name,birth_report.father_name,birth_report.birth_report from birth_report join patients on patients.id = birth_report.patient_id where birth_report.id '
    let updatedValues = []

    if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += 'and date(birth_report.birth_date ) = curdate()';
                break;
            }
            case 'This Week' : 
            {
                updatedQuery += 'and year(birth_report.birth_date ) = year(now()) and week(birth_report.birth_date ) = week(now()) ';
                break;
            }
            case 'Last Week' :
                {
                    updatedQuery += 'and year(birth_report.birth_date ) =year(now()) and week(birth_report.birth_date ) = week(now())-1';
                    break;
                }
            case 'This Month' :
                {
                    updatedQuery += 'and year(birth_report.birth_date ) = year(curdate()) and month(birth_report.birth_date ) = month(curdate())';
                    break;
                }
            case 'Last Month' :
                {
                    updatedQuery += 'and year(birth_report.birth_date ) = year(date_sub(now(),interval 1 month)) and month(birth_report.birth_date ) = month(date_sub(now(),interval 1 month))'
                }
            case 'Last 3 Months' :
                {
                    updatedQuery += 'and year(birth_report.birth_date ) = year(date_sub(now(),interval 3 month)) and month(birth_report.birth_date ) = month(date_sub(now(),interval 3 month))'
                    break;
                }
            case 'Last 6 Months' :
                {
                    updatedQuery += 'and year(birth_report.birth_date ) = year(date_sub(now(),interval 6 month)) and month(birth_report.birth_date ) = month(date_sub(now(),interval 6 month))'
                    break;
                }
            case 'Last 9 Months' :
                {
                    updatedQuery += 'and year(birth_report.birth_date ) = year(date_sub(now(),interval 9 month)) and month(birth_report.birth_date ) = month(date_sub(now(),interval 9 month))'
                    break;
                }
            case 'Last 12 Months' :
                {
                    updatedQuery += 'and year(birth_report.birth_date ) = year(date_sub(now(),interval 12 month)) and month(birth_report.birth_date ) = month(date_sub(now(),interval 12 month))'
                    break;
                }
            case 'This Year' :
                {
                    updatedQuery += 'and year(birth_report.birth_date ) = year(now())'
                    break;
                }
            
            case 'Last Year' :
                {
                    updatedQuery += 'and year(birth_report.birth_date ) = year(now()) - 1 '
                    break;
                }
            case 'Period' :
                {
                    if(req.query.fromDate){
                        updatedQuery += ' and date(birth_report.birth_date) >= ?' 
                        updatedValues.push(req.query.fromDate)
            
                    }
                    if(req.query.ToDate){
                        updatedQuery += ' and date( birth_report.birth_date) <= ?' 
                        updatedValues.push(req.query.ToDate)
            
                    }
                }
           
                }

        }
        if(req.query.gender){
            updatedQuery += ' and birth_report.gender = ? '
            updatedValues.push(req.query.gender)
        }


        BirthReportModel.setQuery(updatedQuery,updatedValues);
        BirthReportModel.GetBirthReport((err,birth_report)=>{
            if(err)
            res.send(err);
    
            console.log('Birth Report  ',birth_report);
            res.send(birth_report);
        })

}