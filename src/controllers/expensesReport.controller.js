const ExpensesReportModel = require('../models/expensesReport.model')

exports.getExpensesReport = (req,res)=>{
    let updatedQuery = 'select expenses.name,expenses.id,expenses.invoice_no,expense_head.exp_category,expenses.date,expenses.amount from expenses join expense_head on expense_head.id = expenses.exp_head_id where expenses.id '
    let updatedValues = []


    if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += 'and date(expenses.date) = curdate()';
                break;
            }
            case 'This Week' : 
            {
                updatedQuery += 'and year(expenses.date) = year(now()) and week(expenses.date) = week(now()) ';
                break;
            }
            case 'Last Week' :
                {
                    updatedQuery += 'and year(expenses.date) =year(now()) and week(expenses.date) = week(now())-1';
                    break;
                }
            case 'This Month' :
                {
                    updatedQuery += 'and year(expenses.date) = year(curdate()) and month(expenses.date) = month(curdate())';
                    break;
                }
            case 'Last Month' :
                {
                    updatedQuery += 'and year(expenses.date) = year(date_sub(now(),interval 1 month)) and month(expenses.date) = month(date_sub(now(),interval 1 month))'
                }
            case 'Last 3 Months' :
                {
                    updatedQuery += 'and year(expenses.date) = year(date_sub(now(),interval 3 month)) and month(expenses.date) = month(date_sub(now(),interval 3 month))'
                    break;
                }
            case 'Last 6 Months' :
                {
                    updatedQuery += 'and year(expenses.date) = year(date_sub(now(),interval 6 month)) and month(expenses.date) = month(date_sub(now(),interval 6 month))'
                    break;
                }
            case 'Last 9 Months' :
                {
                    updatedQuery += 'and year(expenses.date) = year(date_sub(now(),interval 9 month)) and month(expenses.date) = month(date_sub(now(),interval 9 month))'
                    break;
                }
            case 'Last 12 Months' :
                {
                    updatedQuery += 'and year(expenses.date) = year(date_sub(now(),interval 12 month)) and month(expenses.date) = month(date_sub(now(),interval 12 month))'
                    break;
                }
            case 'This Year' :
                {
                    updatedQuery += 'and year(expenses.date) = year(now())'
                    break;
                }
            
            case 'Last Year' :
                {
                    updatedQuery += 'and year(expenses.date) = year(now()) - 1 '
                    break;
                }
            case 'Period' :
                {
                    if(req.query.fromDate){
                        updatedQuery += ' and date(expenses.date) >= ?' 
                        updatedValues.push(req.query.fromDate)
            
                    }
                    if(req.query.ToDate){
                        updatedQuery += ' and date( expenses.date) <= ?' 
                        updatedValues.push(req.query.ToDate)
            
                    }
                }
           
                }

        }

        if(req.query.expenseHead){
            updatedQuery += ' and expenses.exp_head_id = ? '
            updatedValues.push(req.query.expenseHead)
        }
       
        ExpensesReportModel.setQuery(updatedQuery,updatedValues);
        ExpensesReportModel.GetExpensesReport((err,expensesReport)=>{
            if(err)
            res.send(err);
    
            console.log('Expense Report ',expensesReport);
            res.send(expensesReport);
        })



}