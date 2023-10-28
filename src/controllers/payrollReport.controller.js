const PayrollReportModel = require('../models/payrollReport.model')

exports.GetPayrollReport = (req,res)=>{
    let updatedQuery = 'select concat(staff.name," ",staff.surname,"(",staff.employee_id,")") as name, roles.name as role_name,staff_designation.designation,staff_payslip.month,staff_payslip.year,staff_payslip.payment_date,staff_payslip.id,staff_payslip.basic,staff_payslip.total_allowance,staff_payslip.total_deduction,((staff_payslip.basic + staff_payslip.total_allowance) - (staff_payslip.total_deduction)) as gross_salary,staff_payslip.tax,(((staff_payslip.basic + staff_payslip.total_allowance) - (staff_payslip.total_deduction))-  ((staff_payslip.tax *((staff_payslip.basic + staff_payslip.total_allowance) - (staff_payslip.total_deduction)))/100)) as net_salary  from staff_payslip left join staff on staff.id = staff_payslip.staff_id left  join staff_roles on staff_roles.staff_id = staff.id left  join roles on roles.id = staff_roles.role_id left  join staff_designation on staff_designation.id = staff.staff_designation_id where staff_payslip.id  ';
    let updatedValues = []
    if(req.query.timeDuration){
        let duration = req.query.timeDuration;


        switch(duration){
            case 'today' : 
            {
                updatedQuery += ' and date(staff_payslip.payment_date) = curdate()';
                break;
            }
            case 'This Week' : 
            {
                updatedQuery += 'and year(staff_payslip.payment_date) = year(now()) and week(staff_payslip.payment_date) = week(now()) ';
                break;
            }
            case 'Last Week' :
                {
                    updatedQuery += 'and year(staff_payslip.payment_date) =year(now()) and week(staff_payslip.payment_date) = week(now())-1';
                    break;
                }
            case 'This Month' :
                {
                    updatedQuery += 'and year(staff_payslip.payment_date) = year(curdate()) and month(staff_payslip.payment_date) = month(curdate())';
                    break;
                }
            case 'Last Month' :
                {
                    updatedQuery += 'and year(staff_payslip.payment_date) = year(date_sub(now(),interval 1 month)) and month(staff_payslip.payment_date) = month(date_sub(now(),interval 1 month))'
                }
            case 'Last 3 Months' :
                {
                    updatedQuery += 'and year(staff_payslip.payment_date) = year(date_sub(now(),interval 3 month)) and month(staff_payslip.payment_date) = month(date_sub(now(),interval 3 month))'
                    break;
                }
            case 'Last 6 Months' :
                {
                    updatedQuery += 'and year(staff_payslip.payment_date) = year(date_sub(now(),interval 6 month)) and month(staff_payslip.payment_date) = month(date_sub(now(),interval 6 month))'
                    break;
                }
            case 'Last 9 Months' :
                {
                    updatedQuery += 'and year(staff_payslip.payment_date) = year(date_sub(now(),interval 9 month)) and month(staff_payslip.payment_date) = month(date_sub(now(),interval 9 month))'
                    break;
                }
            case 'Last 12 Months' :
                {
                    updatedQuery += 'and year(staff_payslip.payment_date) = year(date_sub(now(),interval 12 month)) and month(staff_payslip.payment_date) = month(date_sub(now(),interval 12 month))'
                    break;
                }
            case 'This Year' :
                {
                    updatedQuery += 'and year(staff_payslip.payment_date) = year(now())'
                    break;
                }
            
            case 'Last Year' :
                {
                    updatedQuery += 'and year(staff_payslip.payment_date) = year(now()) - 1 '
                    break;
                }
            case 'Period' :
                {
                    if(req.query.fromDate){
                        updatedQuery += ' and date(staff_payslip.payment_date) >= ?' 
                        updatedValues.push(req.query.fromDate)
            
                    }
                    if(req.query.ToDate){
                        updatedQuery += ' and date( staff_payslip.payment_date) <= ?' 
                        updatedValues.push(req.query.ToDate)
            
                    }
                }
           
                }

        }
        PayrollReportModel.setQuery(updatedQuery,updatedValues);
        PayrollReportModel.GetPayrollReport((err,payrollreport)=>{
            if(err)
            res.send(err);

            console.log(' Payroll Report ',payrollreport);
            res.send(payrollreport);
        })
        
}