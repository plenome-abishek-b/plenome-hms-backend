var dbcon = require('../../config/db.config');

var payroll = function (staff){
    this.id = staff.id;
   

}

//get all staff payroll
payroll.getallpayroll = (result)=>{
    dbcon.query('select * from staff_payroll',(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('payroll fetched');
            result(null,res);
        }
    })
}



module.exports = payroll;