

var dbconn = require('../../config/db.config');
var staffroles = function(role){
    this.id = role.id;
    this.role_id = role.role_id;
    this.staff_id = role.staff_id;
    this.is_active = role.is_active;
    this.created_at = role.created_at;

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

staffroles.createstaffroles = (staffdata,result)=>{
    console.log(staffdata,'staffdata')
    dbconn.query('insert into staff_roles SET ?',staffdata,(err,res)=>{
        if(err){
            console.log(err)
            console.log('error while inserting data');
            result(null,err);
        }else{
            console.log('staff roles data inserted successfully');
            result(null,res)
        }
    })
}


module.exports = staffroles;