const IncomeReportModel = require('../models/incomeReport.model')

exports.getIncomeReport = (req,res)=>{
    let updatedQuery = 'select income.name,income.id,income.invoice_no,income_head.income_category,income.date,income.amount from income join income_head on income_head.id = income.inc_head_id '
    let updatedValues = []

    if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += 'and date(income.date ) = curdate()';
                break;
            }
            case 'This Week' : 
            {
                updatedQuery += 'and year(income.date ) = year(now()) and week(income.date ) = week(now()) ';
                break;
            }
            case 'Last Week' :
                {
                    updatedQuery += 'and year(income.date ) =year(now()) and week(income.date ) = week(now())-1';
                    break;
                }
            case 'This Month' :
                {
                    updatedQuery += 'and year(income.date ) = year(curdate()) and month(income.date ) = month(curdate())';
                    break;
                }
            case 'Last Month' :
                {
                    updatedQuery += 'and year(income.date ) = year(date_sub(now(),interval 1 month)) and month(income.date ) = month(date_sub(now(),interval 1 month))'
                }
            case 'Last 3 Months' :
                {
                    updatedQuery += 'and year(income.date ) = year(date_sub(now(),interval 3 month)) and month(income.date ) = month(date_sub(now(),interval 3 month))'
                    break;
                }
            case 'Last 6 Months' :
                {
                    updatedQuery += 'and year(income.date ) = year(date_sub(now(),interval 6 month)) and month(income.date ) = month(date_sub(now(),interval 6 month))'
                    break;
                }
            case 'Last 9 Months' :
                {
                    updatedQuery += 'and year(income.date ) = year(date_sub(now(),interval 9 month)) and month(income.date ) = month(date_sub(now(),interval 9 month))'
                    break;
                }
            case 'Last 12 Months' :
                {
                    updatedQuery += 'and year(income.date ) = year(date_sub(now(),interval 12 month)) and month(income.date ) = month(date_sub(now(),interval 12 month))'
                    break;
                }
            case 'This Year' :
                {
                    updatedQuery += 'and year(income.date ) = year(now())'
                    break;
                }
            
            case 'Last Year' :
                {
                    updatedQuery += 'and year(income.date ) = year(now()) - 1 '
                    break;
                }
            case 'Period' :
                {
                    if(req.query.fromDate){
                        updatedQuery += ' and date(income.date) >= ?' 
                        updatedValues.push(req.query.fromDate)
            
                    }
                    if(req.query.ToDate){
                        updatedQuery += ' and date( income.date) <= ?' 
                        updatedValues.push(req.query.ToDate)
            
                    }
                }
           
                }

        }
    if(req.query.incomeHead){
        updatedQuery += ' and income.inc_head_id = ? '
        updatedValues.push(req.query.incomeHead)
    }
   
        IncomeReportModel.setQuery(updatedQuery,updatedValues);
        IncomeReportModel.GetIncomeReport((err,incomeReport)=>{
            if(err)
            res.send(err);
    
            console.log('Income Report ',incomeReport);
            res.send(incomeReport);
        })


        

}