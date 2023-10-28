var dbconn = require('../../config/db.config');
var staffroles = function(role){
    this.id = role.id;

}

let query1 = 'select * from staff';
let values = [];
staffroles.setQuery=(updatedQuery,updatedvalues)=>{
    console.log('activated');
    query1 = updatedQuery;
    values = updatedvalues;
    console.log('activated query :'+values);
}

staffroles.getroles = (result)=>{
    console.log(query1);
    dbconn.query(query1,values,(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('roles fetched');
            result(null,res);
        }
    })
}

module.exports = staffroles;