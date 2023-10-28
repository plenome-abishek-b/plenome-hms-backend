const TransactionReportModel = require('../models/transactionReport.model')

exports.GetTransactions = (req,res) =>{
    let updatedQuery = ' select concat("TRID",transactions.id) billno,transactions.payment_date,concat(patients.patient_name," (",patients.id,")")patient_name,(case when transactions.opd_id then concat("OPDN",transactions.opd_id) when transactions.pharmacy_bill_basic_id then concat("PHAB",transactions.pharmacy_bill_basic_id) when transactions.pathology_billing_id then concat("PATB",transactions.pathology_billing_id) when transactions.radiology_billing_id then concat("RADB",transactions.radiology_billing_id) when transactions.blood_issue_id then concat("BLBB",transactions.blood_issue_id)  when transactions.ambulance_call_id then concat("AMCB",transactions.ambulance_call_id)  else coalesce(" ") end ) as referance,transactions.section,concat(staff.name," ",staff.surname," (",staff.employee_id,")") as collected_by,transactions.payment_mode,transactions.type,transactions.amount from transactions left join patients on patients.id = transactions.patient_id left join staff on staff.id = transactions.received_by where transactions.id '
    let updatedValues = []

    if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += 'and date(transactions.payment_date ) = curdate()';
                break;
            }
            case 'This Week' : 
            {
                updatedQuery += 'and year(transactions.payment_date ) = year(now()) and week(transactions.payment_date ) = week(now()) ';
                break;
            }
            case 'Last Week' :
                {
                    updatedQuery += 'and year(transactions.payment_date ) =year(now()) and week(transactions.payment_date ) = week(now())-1';
                    break;
                }
            case 'This Month' :
                {
                    updatedQuery += 'and year(transactions.payment_date ) = year(curdate()) and month(transactions.payment_date ) = month(curdate())';
                    break;
                }
            case 'Last Month' :
                {
                    updatedQuery += 'and year(transactions.payment_date ) = year(date_sub(now(),interval 1 month)) and month(transactions.payment_date ) = month(date_sub(now(),interval 1 month))'
                }
            case 'Last 3 Months' :
                {
                    updatedQuery += 'and year(transactions.payment_date ) = year(date_sub(now(),interval 3 month)) and month(transactions.payment_date ) = month(date_sub(now(),interval 3 month))'
                    break;
                }
            case 'Last 6 Months' :
                {
                    updatedQuery += 'and year(transactions.payment_date ) = year(date_sub(now(),interval 6 month)) and month(transactions.payment_date ) = month(date_sub(now(),interval 6 month))'
                    break;
                }
            case 'Last 9 Months' :
                {
                    updatedQuery += 'and year(transactions.payment_date ) = year(date_sub(now(),interval 9 month)) and month(transactions.payment_date ) = month(date_sub(now(),interval 9 month))'
                    break;
                }
            case 'Last 12 Months' :
                {
                    updatedQuery += 'and year(transactions.payment_date ) = year(date_sub(now(),interval 12 month)) and month(transactions.payment_date ) = month(date_sub(now(),interval 12 month))'
                    break;
                }
            case 'This Year' :
                {
                    updatedQuery += 'and year(transactions.payment_date ) = year(now())'
                    break;
                }
            
            case 'Last Year' :
                {
                    updatedQuery += 'and year(transactions.payment_date ) = year(now()) - 1 '
                    break;
                }
            case 'Period' :
                {
                    if(req.query.fromDate){
                        updatedQuery += ' and date(transactions.payment_date) >= ?' 
                        updatedValues.push(req.query.fromDate)
            
                    }
                    if(req.query.ToDate){
                        updatedQuery += ' and date( transactions.payment_date) <= ?' 
                        updatedValues.push(req.query.ToDate)
            
                    }
                }
           
                }

        }

        if(req.query.collectedBy){
            updatedQuery += ' and transactions.received_by = ? '
            updatedValues.push(req.query.collectedBy)
        }
        if(req.query.head){
            updatedQuery += ' and transactions.section = ? '
            updatedValues.push(req.query.head)
        }

        TransactionReportModel.setQuery(updatedQuery,updatedValues);
        TransactionReportModel.GetTransactions((err,transactionsReport)=>{
            if(err)
            res.send(err);
    
            console.log('Transactions Report ',transactionsReport);
            res.send(transactionsReport);
        })

}