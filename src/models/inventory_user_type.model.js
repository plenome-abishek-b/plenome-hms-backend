var dbconn = require('../../config/db.config');

var user_type = function(type){
    this.id = type.id;
}

user_type.getuser_type = (result)=>{
    dbconn.query('select * from roles',(err,res)=>{
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('roles fetched');
            result(null,res);
        }
    })
}

module.exports = user_type;