const PayrollMonthReportModel = require('../models/payrollMonthReport.model')

exports.GetPayrollReport = (req,res)=>{
    let updatedQuery = 'select concat(staff.name," ",staff.surname,"(",staff.employee_id,")") as name, roles.name as role_name,staff_designation.designation,staff_payslip.month,staff_payslip.year,staff_payslip.payment_date,staff_payslip.id,staff_payslip.basic,staff_payslip.total_allowance,staff_payslip.total_deduction,((staff_payslip.basic + staff_payslip.total_allowance) - (staff_payslip.total_deduction)) as gross_salary,staff_payslip.tax,(((staff_payslip.basic + staff_payslip.total_allowance) - (staff_payslip.total_deduction))-  ((staff_payslip.tax *((staff_payslip.basic + staff_payslip.total_allowance) - (staff_payslip.total_deduction)))/100)) as net_salary  from staff_payslip left join staff on staff.id = staff_payslip.staff_id left  join staff_roles on staff_roles.staff_id = staff.id left  join roles on roles.id = staff_roles.role_id left  join staff_designation on staff_designation.id = staff.staff_designation_id where staff_payslip.id  ';
    let updatedValues = []

    if(req.query.role){
        updatedQuery += ' and roles.id = ? '
        updatedValues.push(req.query.role)
    }

    if(req.query.month){
        updatedQuery += ' and staff_payslip.month '
        updatedValues.push(req.query.month)
    }

    if(req.query.year){
        updatedQuery += ' and staff_payslip.year '
        updatedValues.push(req.query.year)
    }




        PayrollMonthReportModel.setQuery(updatedQuery,updatedValues);
        PayrollMonthReportModel.GetPayrollMonthReport((err,payrollreport)=>{
            if(err)
            res.send(err);

            console.log(' Payroll month Report ',payrollreport);
            res.send(payrollreport);
        })
        
}