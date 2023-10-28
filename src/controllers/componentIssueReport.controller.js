const ComponentIssueReportModel = require('../models/componentIssueReport.model')

exports.GetComponentIssueReport = (req,res)=>{
    let updatedQuery = ' select concat("BLBB",blood_issue.id) as bill_no,blood_issue.date_of_issue,concat(patients.patient_name," " ,"(", patients.id,")") as receivedTo, bbp1.name,  bbp2.name,patients.gender, blood_donor.donor_name,concat(bdc2.bag_no," ","(",bdc2.volume,")") as bags,concat(staff.name," " ,staff.surname,"(",staff.employee_id,")") as ComponentCollectedBy,blood_issue.net_amount as amount,transactions.amount as paid_amount,(blood_issue.net_amount - transactions.amount) as balance_amount from blood_issue join patients on patients.id = blood_issue.patient_id join blood_donor_cycle as bdc1 on bdc1.id = blood_issue.blood_donor_cycle_id join blood_donor_cycle as bdc2 on bdc2.id = bdc1.blood_donor_cycle_id join blood_bank_products as bbp1 on bbp1.id = bdc1.blood_bank_product_id  join blood_donor on blood_donor.id = bdc2.blood_donor_id join blood_bank_products as bbp2 on bbp2.id = blood_donor.blood_bank_product_id  join transactions on transactions.blood_issue_id = blood_issue.id join staff on staff.id = blood_issue.generated_by where blood_issue.id '
    let updatedValues = []

    if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += 'and date(blood_issue.date_of_issue ) = curdate()';
                break;
            }
            case 'This Week' : 
            {
                updatedQuery += 'and year(blood_issue.date_of_issue ) = year(now()) and week(blood_issue.date_of_issue ) = week(now()) ';
                break;
            }
            case 'Last Week' :
                {
                    updatedQuery += 'and year(blood_issue.date_of_issue ) =year(now()) and week(blood_issue.date_of_issue ) = week(now())-1';
                    break;
                }
            case 'This Month' :
                {
                    updatedQuery += 'and year(blood_issue.date_of_issue ) = year(curdate()) and month(blood_issue.date_of_issue ) = month(curdate())';
                    break;
                }
            case 'Last Month' :
                {
                    updatedQuery += 'and year(blood_issue.date_of_issue ) = year(date_sub(now(),interval 1 month)) and month(blood_issue.date_of_issue ) = month(date_sub(now(),interval 1 month))'
                }
            case 'Last 3 Months' :
                {
                    updatedQuery += 'and year(blood_issue.date_of_issue ) = year(date_sub(now(),interval 3 month)) and month(blood_issue.date_of_issue ) = month(date_sub(now(),interval 3 month))'
                    break;
                }
            case 'Last 6 Months' :
                {
                    updatedQuery += 'and year(blood_issue.date_of_issue ) = year(date_sub(now(),interval 6 month)) and month(blood_issue.date_of_issue ) = month(date_sub(now(),interval 6 month))'
                    break;
                }
            case 'Last 9 Months' :
                {
                    updatedQuery += 'and year(blood_issue.date_of_issue ) = year(date_sub(now(),interval 9 month)) and month(blood_issue.date_of_issue ) = month(date_sub(now(),interval 9 month))'
                    break;
                }
            case 'Last 12 Months' :
                {
                    updatedQuery += 'and year(blood_issue.date_of_issue ) = year(date_sub(now(),interval 12 month)) and month(blood_issue.date_of_issue ) = month(date_sub(now(),interval 12 month))'
                    break;
                }
            case 'This Year' :
                {
                    updatedQuery += 'and year(blood_issue.date_of_issue ) = year(now())'
                    break;
                }
            
            case 'Last Year' :
                {
                    updatedQuery += 'and year(blood_issue.date_of_issue ) = year(now()) - 1 '
                    break;
                }
            case 'Period' :
                {
                    if(req.query.fromDate){
                        updatedQuery += ' and date(blood_issue.date_of_issue) >= ?' 
                        updatedValues.push(req.query.fromDate)
            
                    }
                    if(req.query.ToDate){
                        updatedQuery += ' and date( blood_issue.date_of_issue) <= ?' 
                        updatedValues.push(req.query.ToDate)
            
                    }
                }
           
                }

        }

        if(req.query.bloodCollectedBy){
            updatedQuery +=' and blood_issue.generated_by = ? '
            updatedValues.push(req.query.bloodCollectedBy)
        }

    
        if(req.query.amountCollectedBy){
            updatedQuery += ' and transactions.received_by = ? '
            updatedValues.push(req.query.amountCollectedBy)
        }

        if(req.query.bloodGroup){
            updatedQuery += ' and blood_donor.blood_bank_product_id = ?  '
            updatedValues.push(req.query.bloodGroup)
        }


        if(req.query.components){
            updatedQuery += ' and bdc1.blood_bank_product_id = ?  '
            updatedValues.push(req.query.components)
        }

        ComponentIssueReportModel.setQuery(updatedQuery,updatedValues);
        ComponentIssueReportModel.GetComponentIssueReport((err,componentIssueReport)=>{
            if(err)
            res.send(err);
    
            console.log('Component Issue Report ',componentIssueReport);
            res.send(componentIssueReport);
        })
    




}   