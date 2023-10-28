var dbconn = require('../../config/db.config');
var finance_expenses = function(expenses){
     this.id = expenses.id;
    this.exp_head_id = expenses.exp_head_id;
    this.name = expenses.name;
    this.invoice_no = expenses.invoice_no;
    this.date = expenses.date;
    this.amount = expenses.amount;
    this.documents = expenses.documents;
    this.note = expenses.note;
    this.is_active = expenses.is_active;
    this.is_deleted = expenses.is_deleted;
    this.generated_by = expenses.generated_by;
    this.created_at = expenses.created_at;
}
let query = ''
let values =[]
finance_expenses.setquery = (updatdquery,updatedvalues)=>{
    query = updatdquery
    values = updatedvalues
}
finance_expenses.getexpenses = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('expenses fetched');
            result(null,res);
        }
    })
}

finance_expenses.createExpenses = (expensesData,result)=>{
    dbconn.query('insert into expenses SET ?',expensesData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('Expenses Data inserted Successfully');
            result(null,res)
        }
    });
}

module.exports = finance_expenses;