const roleslistmodel = require('../models/roles.model');
exports.getroles = (req,res)=>{
    roleslistmodel.getroles ((err,role)=>{
        if(err)
        res.send(err);
     
        console.log('role ',role);
        res.send(role);
    })
}

exports.getrolesByname = (req,res) =>{
    console.log('get role by name');
    roleslistmodel.getrolesByname(req.params.name,(err, role)=>{
         
        if(err)
            res.send(err);
           
            console.log('Single role',role);
            res.send(role[0]);
        })
}

exports.createRole =(req,res)=>{
    const roleData = new roleslistmodel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        roleslistmodel.createRole(roleData,(err,role)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:' role added successfully',data:role.insertId});

        })
    }
}
