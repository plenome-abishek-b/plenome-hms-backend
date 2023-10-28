const rolespermissionlist = require('../models/rolespermission.model');
exports.getRolespermissionlist = (req,res)=>{
  rolespermissionlist.getRolespermissionlist ((err,rolespermission)=>{
        if(err)
        res.send(err);
     
        console.log('rolespermission ',rolespermission);
        res.send(rolespermission);
    })
}


