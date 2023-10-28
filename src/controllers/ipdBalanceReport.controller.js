const IpdBalanceReportModel = require('../models/ipdBalanceReport.model');

exports.GetIpdBalanceReport = (req,res)=>{
    let updatedQuery = 'SELECT DISTINCT CONCAT("IPDN", ipd_details.id) AS ipd_id,ipd_details.case_reference_id,patients.patient_name,CONCAT(patients.age, " Year ", patients.month, " Month ", patients.day, " Days") AS patient_age,patients.gender,patients.mobileno,patients.guardian_name,ipd_details.discharged,patients.is_active,COALESCE((SELECT SUM(patient_charges.amount) FROM patient_charges WHERE patient_charges.ipd_id = ipd_details.id), 0) AS net_amount,COALESCE((SELECT SUM(transactions.amount) FROM transactions WHERE transactions.ipd_id = ipd_details.id), 0) AS paid_amount,(COALESCE((SELECT SUM(patient_charges.amount) FROM patient_charges WHERE patient_charges.ipd_id = ipd_details.id), 0) - COALESCE((SELECT SUM(transactions.amount) FROM transactions WHERE transactions.ipd_id = ipd_details.id), 0)) AS balance_amount FROM ipd_details JOIN patients ON patients.id = ipd_details.patient_id LEFT JOIN transactions ON transactions.ipd_id = ipd_details.id where ipd_details.id '
    let updatedValues = []


    if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += 'and date(ipd_details.date) = curdate()';
                break;
            }
            case 'ThisWeek' : 
            {
                updatedQuery += 'and year(ipd_details.date) = year(now()) and week(ipd_details.date) = week(now()) ';
                break;
            }
            case 'LastWeek' :
                {
                    updatedQuery += 'and year(ipd_details.date) =year(now()) and week(ipd_details.date) = week(now())-1';
                    break;
                }
            case 'ThisMonth' :
                {
                    updatedQuery += 'and year(ipd_details.date) = year(curdate()) and month(ipd_details.date) = month(curdate())';
                    break;
                }
            case 'LastMonth' :
                {
                    updatedQuery += 'and year(ipd_details.date) = year(date_sub(now(),interval 1 month)) and month(ipd_details.date) = month(date_sub(now(),interval 1 month))'
                }
            case 'Last3Months' :
                {
                    updatedQuery += 'and year(ipd_details.date) = year(date_sub(now(),interval 3 month)) and month(ipd_details.date) = month(date_sub(now(),interval 3 month))'
                    break;
                }
            case 'Last6Months' :
                {
                    updatedQuery += 'and year(ipd_details.date) = year(date_sub(now(),interval 6 month)) and month(ipd_details.date) = month(date_sub(now(),interval 6 month))'
                    break;
                }
            case 'Last9Months' :
                {
                    updatedQuery += 'and year(ipd_details.date) = year(date_sub(now(),interval 9 month)) and month(ipd_details.date) = month(date_sub(now(),interval 9 month))'
                    break;
                }
            case 'Last12Months' :
                {
                    updatedQuery += 'and year(ipd_details.date) = year(date_sub(now(),interval 12 month)) and month(ipd_details.date) = month(date_sub(now(),interval 12 month))'
                    break;
                }
            case 'ThisYear' :
                {
                    updatedQuery += 'and year(ipd_details.date) = year(now())'
                    break;
                }
            
            case 'LastYear' :
                {
                    updatedQuery += 'and year(ipd_details.date) = year(now()) - 1 '
                    break;
                }
            case 'Period' :
                {
                    if(req.query.fromDate){
                        updatedQuery += ' and date(ipd_details.date) >= ? ' 
                        updatedValues.push(req.query.fromDate)
            
                    }
                    if(req.query.ToDate){
                        updatedQuery += ' and date( ipd_details.date) <= ? ' 
                        updatedValues.push(req.query.ToDate)
            
                    }
                }
           
                }

        }

        if(req.query.status){
            updatedQuery += ' and  ipd_details.discharged = ? ';
            updatedValues.push(req.query.status);
        }

        if(req.query.fromAge){
            updatedQuery += ' and  patients.age >= ? ';
            updatedValues.push(req.query.fromAge);
            }
        if(req.query.toAge){
            updatedQuery += ' and  patients.age <= ?  ';
            updatedValues.push(req.query.toAge);
            }
            if(req.query.gender){
                updatedQuery += ' and  patients.gender = ?' ;
                updatedValues.push(req.query.gender);
                }
    IpdBalanceReportModel.setQuery(updatedQuery,updatedValues);
    IpdBalanceReportModel.GetIpdBalanceReport((err,ipdBalanceReport)=>{
        if(err)
        res.send(err);

        console.log('Ipd Balance Report ',ipdBalanceReport);
        res.send(ipdBalanceReport);
    })


}