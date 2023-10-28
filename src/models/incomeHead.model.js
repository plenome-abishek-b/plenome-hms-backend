var dbConn = require('../../config/db.config');

var IncomeHead = function(incomeHead){
    this.id = incomeHead.id
}


IncomeHead.getIncomeHead= (result)=>{
    dbConn.query('select * from income_head',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('income head fetched ');
            result(null,res);
        }
    })
}
module.exports = IncomeHead