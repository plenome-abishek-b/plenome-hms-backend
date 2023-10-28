var dbconn = require('../../config/db.config');
var Rolespermission = function (rolespermission){
    
    this.id = rolespermission.id;
    this.role_id = rolespermission.role_id;
    this.perm_cat_id = rolespermission.perm_cat_id;
    this.can_view = rolespermission.can_view;
    this.can_add = rolespermission.can_add;
    this.can_edit = rolespermission.can_edit
    this.can_delete = rolespermission.can_delete;
    this.created_at = rolespermission.created_at;
    
    
  }


//GET THE AMBULANCE


Rolespermission.getRolespermissionlist = (result)=>{
    dbconn.query('SELECT id, role_id, perm_cat_id, can_view, can_add, can_edit, can_delete, created_at from roles_permissions',(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('ambulancelist  fetched ');
            result(null,res);
        }
    })
}



module.exports = Rolespermission;