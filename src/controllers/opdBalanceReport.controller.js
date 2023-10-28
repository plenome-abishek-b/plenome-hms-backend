const OpdBalanceReportModel = require('../models/opdBalanceReport.model');

exports.GetOpdBalanceReport = (req,res)=>{
    let updatedQuery = 'select distinct concat("OPDN",opd_details.id) as opd_no,patients.patient_name,concat(patients.age," Years ",patients.month," Months ",patients.day," Days ") as age,patients.gender,patients.mobileno,opd_details.case_reference_id,opd_details.discharged,coalesce((select sum(patient_charges.amount) from patient_charges where patient_charges.opd_id = opd_details.id ),0) as net_amount,coalesce((select sum(transactions.amount) from transactions where transactions.opd_id =  opd_details.id)) as paid_amount,(coalesce((select sum(patient_charges.amount) from patient_charges where patient_charges.opd_id = opd_details.id ),0) - coalesce((select sum(transactions.amount) from transactions where transactions.opd_id =  opd_details.id))) as balance_amount from opd_details join patients on patients.id = opd_details.patient_id join transactions on transactions.opd_id = opd_details.id  join visit_details on opd_details.id = visit_details.opd_details_id where opd_details.id '
    let updatedValues = []

    if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += 'and date(visit_details.appointment_date) = curdate()';
                break;
            }
            case 'ThisWeek' : 
            {
                updatedQuery += 'and year(visit_details.appointment_date) = year(now()) and week(visit_details.appointment_date) = week(now()) ';
                break;
            }
            case 'LastWeek' :
                {
                    updatedQuery += 'and year(visit_details.appointment_date) =year(now()) and week(visit_details.appointment_date) = week(now())-1';
                    break;
                }
            case 'ThisMonth' :
                {
                    updatedQuery += 'and year(visit_details.appointment_date) = year(curdate()) and month(visit_details.appointment_date) = month(curdate())';
                    break;
                }
            case 'LastMonth' :
                {
                    updatedQuery += 'and year(visit_details.appointment_date) = year(date_sub(now(),interval 1 month)) and month(visit_details.appointment_date) = month(date_sub(now(),interval 1 month))'
                }
            case 'Last3Months' :
                {
                    updatedQuery += 'and year(visit_details.appointment_date) = year(date_sub(now(),interval 3 month)) and month(visit_details.appointment_date) = month(date_sub(now(),interval 3 month))'
                    break;
                }
            case 'Last6Months' :
                {
                    updatedQuery += 'and year(visit_details.appointment_date) = year(date_sub(now(),interval 6 month)) and month(visit_details.appointment_date) = month(date_sub(now(),interval 6 month))'
                    break;
                }
            case 'Last9Months' :
                {
                    updatedQuery += 'and year(visit_details.appointment_date) = year(date_sub(now(),interval 9 month)) and month(visit_details.appointment_date) = month(date_sub(now(),interval 9 month))'
                    break;
                }
            case 'Last12Months' :
                {
                    updatedQuery += 'and year(visit_details.appointment_date) = year(date_sub(now(),interval 12 month)) and month(visit_details.appointment_date) = month(date_sub(now(),interval 12 month))'
                    break;
                }
            case 'ThisYear' :
                {
                    updatedQuery += 'and year(visit_details.appointment_date) = year(now())'
                    break;
                }
            
            case 'LastYear' :
                {
                    updatedQuery += 'and year(visit_details.appointment_date) = year(now()) - 1 '
                    break;
                }
            case 'Period' :
                {
                    if(req.query.fromDate){
                        updatedQuery += ' and date(visit_details.appointment_date) >= ? ' 
                        updatedValues.push(req.query.fromDate)
            
                    }
                    if(req.query.toDate){
                        updatedQuery += ' and date( visit_details.appointment_date) <= ? ' 
                        updatedValues.push(req.query.ToDate)
            
                    }
                }
           
                }

        }

        if(req.query.status){
            updatedQuery += ' and  opd_details.discharged >= ? ';
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
                updatedQuery += ' and  patients.gender = ? ' ;
                updatedValues.push(req.query.gender);
                }

    
                OpdBalanceReportModel.setQuery(updatedQuery,updatedValues);
                OpdBalanceReportModel.GetOpdBalanceReport((err,opdBalanceReport)=>{
                    if(err)
                    res.send(err);
            
                    console.log('Opd Balance Report ',opdBalanceReport);
                    res.send(opdBalanceReport);
                })
            


}