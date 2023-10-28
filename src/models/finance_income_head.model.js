var dbconn = require('../../config/db.config');
var income_head = function(income){
    this.id = income.id;
    this.income_category = income.income_category;
    this.description = income.description;
    this.is_active = income.is_active;
    this.is_deleted = income.is_deleted;
    this.created_at = income.created_at;
}

let query = ''
let values = []
income_head.setquery = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues
}

income_head.getincome_head = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('income head fetched');
            result(null,res);
        }
    })
}

income_head.createincome_head = (head,result)=>{
    dbconn.query('insert into income_head SET ?',head,(err,res)=>{
        if(err){
            console.log('error while inserting data',err);
            result(null,err);
        }else{
            console.log('income head inserted successfully');
            result(null,res);

        }
    })
}


module.exports = income_head;