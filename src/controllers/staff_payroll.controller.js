const staff_payrollmodel = require('../models/staff_payroll.model');

//get all staff payroll

 exports.getallpayroll = (req,res)=>{
    staff_payrollmodel.getallpayroll((err,payroll)=>{
        if(err)
        res.send(err);

        console.log('list',payroll);
        res.send(payroll);
    })
 }
