var dbConn = require('../../config/db.config');

var ExpenseHead = function(expenseHead){
    this.id = expenseHead.id
}


ExpenseHead.getExpenseHead= (result)=>{
    dbConn.query('select * from expense_head',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('expense head fetched ');
            result(null,res);
        }
    })
}
module.exports = ExpenseHead