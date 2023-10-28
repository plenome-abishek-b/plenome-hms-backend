var dbConn = require('../../config/db.config');

var Roles = function(roles){
    this.id = roles.id;
    this.name = roles.name;
    // this.is_active = roles.is_active;
    // this.is_system = roles.is_system;
    // this.is_superadmin = roles.is_superadmin;
    this.created_at = roles.created_at;
  }


  Roles.getroles = (result)=>{
    dbConn.query('select id, name, is_active, is_system, is_superadmin, created_at from roles',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('roles fetched ');
            result(null,res);
        }
    })
}

  Roles.getrolesByname = (name,result)=>{
    dbConn.query('select * from roles where name =?',[name],(err,res)=>{
        if(err){
            console.log('Error occured while getting by name',err);
            result(null,err);
        }else{
            console.log('roles fetched by name');
            result(null,res);
        }
})
}

  Roles.createRole = (roleData,result)=>{
    dbConn.query('insert into roles SET ?',roleData,(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{
            console.log('roles Data inserted Successfully');
            result(null,res)
        }
    
    });
}

module.exports = Roles;


