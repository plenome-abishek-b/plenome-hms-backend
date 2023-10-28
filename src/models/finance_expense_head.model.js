var dbconn = require('../../config/db.config');
var expense_head = function(outcome){
    this.id = outcome.id;
    this.exp_category = outcome.exp_category;
    this.description = outcome.description;
    this.is_active = outcome.is_active;
    this.is_deleted = outcome.is_deleted;
    this.created_at = outcome.created_at;
}

let query = ''
let values = []
expense_head.setquery = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues
}

expense_head.getexpense_head = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('expense head fetched');
            result(null,res);
        }
    })
}

expense_head.createexpense_head = (head,result)=>{
    dbconn.query('insert into expense_head SET ?',head,(err,res)=>{
        if(err){
            console.log('error while inserting data',err);
            result(null,err);
        }else{
            console.log('expense head inserted successfully');
            result(null,res);
        }
    })
}


module.exports = expense_head;