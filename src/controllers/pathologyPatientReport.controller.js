const PathologyPatientReportModel = require('../models/pathologyPatientReport.model')

exports.getPathologyPatientReport = (req,res)=>{
    let updatedQuery = 'select distinctrow concat("PATB",pathology_billing.id) as bill_no,pathology_billing.date,concat(patients.patient_name,"(",patients.id,")") as patient_name,pathology_category.category_name,concat(pathology.test_name,"(",pathology.short_name,")")as test_name,concat(s1.name," ",s1.surname,"(",s1.employee_id,")") as consult_doctor, concat(s2.name," ",s2.surname,"(",s2.employee_id,")") as sample_collected_by, pathology_billing.net_amount as amount,coalesce((select sum(transactions.amount) from transactions where transactions.pathology_billing_id = pathology_billing.id),0) as paid_amount,((pathology_billing.net_amount)- (coalesce(coalesce((select sum(transactions.amount) from transactions where transactions.pathology_billing_id = pathology_billing.id),0)))) as balance_amount from pathology_report left join pathology on pathology.id = pathology_report.pathology_id left join pathology_billing on pathology_billing.id = pathology_report.pathology_bill_id left join patients on patients.id = pathology_report.patient_id left join staff as s1 on s1.id = pathology_billing.doctor_id left join staff as s2 on s2.id = pathology_report.collection_specialist left join transactions on transactions.pathology_billing_id = pathology_billing.id left join pathology_category on pathology_category.id = pathology.pathology_category_id where pathology.id '   
     let updatedValues = []


     if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += 'and date(pathology_billing.date ) = curdate()';
                break;
            }
            case 'This Week' : 
            {
                updatedQuery += 'and year(pathology_billing.date ) = year(now()) and week(pathology_billing.date ) = week(now()) ';
                break;
            }
            case 'Last Week' :
                {
                    updatedQuery += 'and year(pathology_billing.date ) =year(now()) and week(pathology_billing.date ) = week(now())-1';
                    break;
                }
            case 'This Month' :
                {
                    updatedQuery += 'and year(pathology_billing.date ) = year(curdate()) and month(pathology_billing.date ) = month(curdate())';
                    break;
                }
            case 'Last Month' :
                {
                    updatedQuery += 'and year(pathology_billing.date ) = year(date_sub(now(),interval 1 month)) and month(pathology_billing.date ) = month(date_sub(now(),interval 1 month))'
                }
            case 'Last 3 Months' :
                {
                    updatedQuery += 'and year(pathology_billing.date ) = year(date_sub(now(),interval 3 month)) and month(pathology_billing.date ) = month(date_sub(now(),interval 3 month))'
                    break;
                }
            case 'Last 6 Months' :
                {
                    updatedQuery += 'and year(pathology_billing.date ) = year(date_sub(now(),interval 6 month)) and month(pathology_billing.date ) = month(date_sub(now(),interval 6 month))'
                    break;
                }
            case 'Last 9 Months' :
                {
                    updatedQuery += 'and year(pathology_billing.date ) = year(date_sub(now(),interval 9 month)) and month(pathology_billing.date ) = month(date_sub(now(),interval 9 month))'
                    break;
                }
            case 'Last 12 Months' :
                {
                    updatedQuery += 'and year(pathology_billing.date ) = year(date_sub(now(),interval 12 month)) and month(pathology_billing.date ) = month(date_sub(now(),interval 12 month))'
                    break;
                }
            case 'This Year' :
                {
                    updatedQuery += 'and year(pathology_billing.date ) = year(now())'
                    break;
                }
            
            case 'Last Year' :
                {
                    updatedQuery += 'and year(pathology_billing.date ) = year(now()) - 1 '
                    break;
                }
            case 'Period' :
                {
                    if(req.query.fromDate){
                        updatedQuery += ' and date(pathology_billing.date) >= ?' 
                        updatedValues.push(req.query.fromDate)
            
                    }
                    if(req.query.ToDate){
                        updatedQuery += ' and date( pathology_billing.date) <= ?' 
                        updatedValues.push(req.query.ToDate)
            
                    }
                }
           
                }

        }
    if(req.query.collectedBy){
        updatedQuery += ' and pathology_report.collection_specialist  = ? '
        updatedValues.push(req.query.collectedBy)
    }
    if(req.query.category){
        updatedQuery += ' and pathology.pathology_category_id = ? '
        updatedValues.push(req.query.category)
    }
    if(req.query.test){
        updatedQuery += ' and pathology_report.pathology_id = ? '
        updatedValues.push(req.query.test)
    }
    PathologyPatientReportModel.setQuery(updatedQuery,updatedValues);
    PathologyPatientReportModel.GetPathologyPatientReport((err,pathologyPatientReport)=>{
        if(err)
        res.send(err);

        console.log('Pathology patient Report ',pathologyPatientReport);
        res.send(pathologyPatientReport);
    })
}