const InventoryIssueReportModel = require('../models/inventoryIssueReport.model');

exports.GetInventoryIssueReport = (req,res)=>{
    let updatedQuery = 'select item.name,item_category.item_category,concat(item_issue.issue_date," - ",item_issue.return_date) as issue_return,item_issue.issue_by,item_issue.quantity,concat(roles.name," ",staff.name," ",staff.surname) as issued_to from item_issue join item on item.id = item_issue.item_id join staff on staff.id = item_issue.issue_to join item_category on item_category.id = item.item_category_id join staff_roles on staff_roles.staff_id = staff.id join roles on roles.id = staff_roles.role_id ';
    let updatedValues = []

    if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += 'and date(item_issue.issue_date ) = curdate()';
                break;
            }
            case 'This Week' : 
            {
                updatedQuery += 'and year(item_issue.issue_date ) = year(now()) and week(item_issue.issue_date ) = week(now()) ';
                break;
            }
            case 'Last Week' :
                {
                    updatedQuery += 'and year(item_issue.issue_date ) =year(now()) and week(item_issue.issue_date ) = week(now())-1';
                    break;
                }
            case 'This Month' :
                {
                    updatedQuery += 'and year(item_issue.issue_date ) = year(curdate()) and month(item_issue.issue_date ) = month(curdate())';
                    break;
                }
            case 'Last Month' :
                {
                    updatedQuery += 'and year(item_issue.issue_date ) = year(date_sub(now(),interval 1 month)) and month(item_issue.issue_date ) = month(date_sub(now(),interval 1 month))'
                }
            case 'Last 3 Months' :
                {
                    updatedQuery += 'and year(item_issue.issue_date ) = year(date_sub(now(),interval 3 month)) and month(item_issue.issue_date ) = month(date_sub(now(),interval 3 month))'
                    break;
                }
            case 'Last 6 Months' :
                {
                    updatedQuery += 'and year(item_issue.issue_date ) = year(date_sub(now(),interval 6 month)) and month(item_issue.issue_date ) = month(date_sub(now(),interval 6 month))'
                    break;
                }
            case 'Last 9 Months' :
                {
                    updatedQuery += 'and year(item_issue.issue_date ) = year(date_sub(now(),interval 9 month)) and month(item_issue.issue_date ) = month(date_sub(now(),interval 9 month))'
                    break;
                }
            case 'Last 12 Months' :
                {
                    updatedQuery += 'and year(item_issue.issue_date ) = year(date_sub(now(),interval 12 month)) and month(item_issue.issue_date ) = month(date_sub(now(),interval 12 month))'
                    break;
                }
            case 'This Year' :
                {
                    updatedQuery += 'and year(item_issue.issue_date ) = year(now())'
                    break;
                }
            
            case 'Last Year' :
                {
                    updatedQuery += 'and year(item_issue.issue_date ) = year(now()) - 1 '
                    break;
                }
            case 'Period' :
                {
                    if(req.query.fromDate){
                        updatedQuery += ' and date(item_issue.issue_date) >= ?' 
                        updatedValues.push(req.query.fromDate)
            
                    }
                    if(req.query.ToDate){
                        updatedQuery += ' and date( item_issue.issue_date) <= ?' 
                        updatedValues.push(req.query.ToDate)
            
                    }
                }
           
                }

        }
        
        InventoryIssueReportModel.setQuery(updatedQuery,updatedValues);
        InventoryIssueReportModel.GetInventoryIssueReport((err,inventoryIssueReport)=>{
            if(err)
            res.send(err);

            console.log('inventory Issue Report ',inventoryIssueReport);
            res.send(inventoryIssueReport);
        })

}