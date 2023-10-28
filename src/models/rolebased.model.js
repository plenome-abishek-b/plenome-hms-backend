var dbconn = require('../../config/db.config');
var staffroles = function(star){
    this.id = star.id;
}

let query = ''
let values = []

staffroles.setquery = (updatedquery,updatedvalues)=>{
    query = updatedquery;
    values = updatedvalues;
}

staffroles.getstaffroles = (result)=>{
    dbconn.query(query,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('staff role fetched');
            result(null,res);
        }
    })
}

module.exports = staffroles;