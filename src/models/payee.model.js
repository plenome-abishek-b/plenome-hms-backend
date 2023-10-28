var dbconn = require('../../config/db.config');
var Payee = function(payees){
    this.id = payees.id;
}

let query = '';
let values = ['']

Payee.setvalues = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues
}

Payee.getPayee = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('unit fetched');
            result(null,res);

        }
    })
}



module.exports = Payee;