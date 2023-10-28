var dbconn = require('../../config/db.config');
var finance_income = function(income){
    this.id = income.id;
    this.inc_head_id = income.inc_head_id;
    this.name = income.name;
    this.invoice_no = income.invoice_no;
    this.date = income.date;
    this.amount = income.amount;
    this.documents = income.documents;
    this.note = income.note;
    this.is_active = income.is_active;
    this.is_deleted = income.is_deleted;
    this.generated_by = income.generated_by;
    this.created_at = income.created_at;
    
}

let query = ''
let values = []
finance_income.setquery = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}

finance_income.getfinance_income = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);

        }
        else
        {
            console.log('finance_income');
            result(null,res);
        }
    })
}

finance_income.createfinance_income = (finance,result)=>{
    dbconn.query('insert into income SET ?',finance,(err,res)=>{
        if(err){
            console.log('error while inserting data',err);
            result(null,err);
        }else{
            console.log('income inserted successfully');
            result(null,res);
        }
    })
}

finance_income.updatefinance_income = (financeupdatedata,result)=>{
    dbconn.query(query,[financeupdatedata,values],(err,res)=>{
        if(err){
            console.log(err)
            console.log('error while inserting data');
            result(null,err);
        }else{
            console.log('income data updated successfully');
            result(null,res);
        }
    });
}

module.exports = finance_income;