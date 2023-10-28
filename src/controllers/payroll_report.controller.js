const payroll_report_model = require('../MODELS/payroll_report.model');

exports.getpayroll_report = (req,res)=>{
    let updatedquery = 'select * from staff_payslip'
    let updatedvalues = [];

    if(req.query.timeduration){
        let duration = req.query.timeduration;


        switch(duration){
            case 'today' :
                {
                    updatedquery += '';
                    break;
                }
            case 'this week' :
                {
                    updatedquery += '';
                }    
            case 'last week' :
                {
                    updatedquery += '';
                }    
            case 'this month' :
                {
                    updatedquery += '';
                }
            case 'last month' :
                {
                    updatedquery += '';
                } 
            case 'last 3 months' :
                {
                    updatedquery += '';
                }    
            case 'last 6 months' :
                {
                    updatedquery += '';
                }   
            case 'last 12 months' :
                {
                    updatedquery += '';
                }    
            case 'this year' :
                {
                    updatedquery += '';
                }    
            case 'last year' :
                {
                    updatedquery += '';
                }    
            case 'period' :
                {
                    
                }    
        }   
    }

    payroll_report_model.setquery(updatedquery,updatedvalues);
    payroll_report_model.getpayroll_report((err,report)=>{
        if(err)
        res.send(err);

        console.log('staff payslip fetched',report);
        res.send(report);
    })
}