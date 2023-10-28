const expense_head = require('../models/finance_expense_head.model');
exports.getexpense_head = (req,res)=>{
    let updatedquery = 'select * from expense_head'
    let updatedvalues = [];

    if(req.query.search){
        updatedquery = 'select * from expense_head where exp_category like ?    '
        updatedvalues.push("%"+req.query.search+"%");
    }

    expense_head.setquery(updatedquery,updatedvalues)
    expense_head.getexpense_head((err,expense)=>{
        if(err)
        res.send(err);

        console.log('expense head generated',expense);
        res.send(expense);
    })
}

exports.createexpense_head = (req,res)=>{
    const expensedata = new expense_head(req.body);
    if(req.body.constructor === Object && Object(req.body).length ===0){
        res.send({success:false,message:'fill the details'});
    }else{
        expense_head.createexpense_head(expensedata,(err,expense)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'expense head added successfully',data:expense.insertId});
            
        })
    }
}