const finance_expensesModel = require('../models/finance_expenses.model');
exports.getexpenses = (req,res)=>{
    let updatedquery = 'select expenses.* ,expense_head.exp_category from expenses join expense_head on expense_head.id = expenses.exp_head_id'
    let updatedvalues = [];

    if(req.query.search){
        updatedquery += ' where expenses.name like ? or expenses.invoice_no like ? or expenses.note like ? or expense_head.exp_category like ? '
        updatedvalues.push("%"+req.query.search+"%");
        updatedvalues.push("%"+req.query.search+"%");
        updatedvalues.push("%"+req.query.search+"%");
        updatedvalues.push("%"+req.query.search+"%");
    }
    finance_expensesModel.setquery(updatedquery,updatedvalues)
    finance_expensesModel.getexpenses((err,expenses)=>{
        if(err)
        res.send(err);

        console.log('expenses generated',expenses);
        res.send(expenses);
    })
}
exports.createexpenses = (req,res)=>{
    const expensesData = new finance_expensesModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        finance_expensesModel.createExpenses(expensesData,(err,expenses)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' expenses added successfully',data:expenses.insertId});

        })
    }
}