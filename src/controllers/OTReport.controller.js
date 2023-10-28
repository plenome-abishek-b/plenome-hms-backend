const OTReportModel = require('../models/OTReport.model')

exports.getOTReport = (req,res)=>{
    let updatedQuery = ' select operation_theatre.date,(concat("OTRN",operation_theatre.id))as reference_no,(concat("OPDN",operation_theatre.opd_details_id))as opd_id,(concat("IPDN",operation_theatre.ipd_details_id))ipd_id,(concat(staff.name," ",staff.surname,"(",staff.employee_id,")")) as cons_doctor,operation_theatre.ass_consultant_1,operation.operation as operation_name,operation_category.category as operation_category,operation_theatre.result from operation_theatre join staff on staff.id = operation_theatre.consultant_doctor join operation on operation.id = operation_theatre.operation_id join operation_category on operation_category.id = operation.category_id where operation_theatre.id '
    let updatedValues = []
    if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += 'and date(operation_theatre.date ) = curdate()';
                break;
            }
            case 'This Week' : 
            {
                updatedQuery += 'and year(operation_theatre.date ) = year(now()) and week(operation_theatre.date ) = week(now()) ';
                break;
            }
            case 'Last Week' :
                {
                    updatedQuery += 'and year(operation_theatre.date ) =year(now()) and week(operation_theatre.date ) = week(now())-1';
                    break;
                }
            case 'This Month' :
                {
                    updatedQuery += 'and year(operation_theatre.date ) = year(curdate()) and month(operation_theatre.date ) = month(curdate())';
                    break;
                }
            case 'Last Month' :
                {
                    updatedQuery += 'and year(operation_theatre.date ) = year(date_sub(now(),interval 1 month)) and month(operation_theatre.date ) = month(date_sub(now(),interval 1 month))'
                }
            case 'Last 3 Months' :
                {
                    updatedQuery += 'and year(operation_theatre.date ) = year(date_sub(now(),interval 3 month)) and month(operation_theatre.date ) = month(date_sub(now(),interval 3 month))'
                    break;
                }
            case 'Last 6 Months' :
                {
                    updatedQuery += 'and year(operation_theatre.date ) = year(date_sub(now(),interval 6 month)) and month(operation_theatre.date ) = month(date_sub(now(),interval 6 month))'
                    break;
                }
            case 'Last 9 Months' :
                {
                    updatedQuery += 'and year(operation_theatre.date ) = year(date_sub(now(),interval 9 month)) and month(operation_theatre.date ) = month(date_sub(now(),interval 9 month))'
                    break;
                }
            case 'Last 12 Months' :
                {
                    updatedQuery += 'and year(operation_theatre.date ) = year(date_sub(now(),interval 12 month)) and month(operation_theatre.date ) = month(date_sub(now(),interval 12 month))'
                    break;
                }
            case 'This Year' :
                {
                    updatedQuery += 'and year(operation_theatre.date ) = year(now())'
                    break;
                }
            
            case 'Last Year' :
                {
                    updatedQuery += 'and year(operation_theatre.date ) = year(now()) - 1 '
                    break;
                }
            case 'Period' :
                {
                    if(req.query.fromDate){
                        updatedQuery += ' and date(operation_theatre.date) >= ?' 
                        updatedValues.push(req.query.fromDate)
            
                    }
                    if(req.query.ToDate){
                        updatedQuery += ' and date( operation_theatre.date) <= ?' 
                        updatedValues.push(req.query.ToDate)
            
                    }
                }
           
                }

        }

    if(req.query.doctor){
        updatedQuery += ' and operation_theatre.consultant_doctor = ? '
        updatedValues.push(req.query.doctor)
    }
    if(req.query.category){
        updatedQuery += ' and operation_category.id = ? '
        updatedValues.push(req.query.category)
    }
    if(req.query.operation){
        updatedQuery +=' and operation.id = ? '
        updatedValues.push(req.query.operation)
    }

    OTReportModel.setQuery(updatedQuery,updatedValues);
    OTReportModel.GetOTReport((err,otReport)=>{
        if(err)
        res.send(err);

        console.log('OT Report ',otReport);
        res.send(otReport);
    })


}