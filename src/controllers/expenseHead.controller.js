const ExpenseHeadModel = require('../models/expensesHead.model')
exports.getExpenseHead = (req,res)=>{
    ExpenseHeadModel.getExpenseHead((err,expenseHead)=>{

      
        if(err)
        res.send(err);
     
        console.log('expenseHead ',expenseHead);
        res.send(expenseHead);
    
    })
}