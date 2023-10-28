const staffrolesmodel = require('../models/user_by_roles.model');

exports.getroles = (req,res)=>{
    console.log('');
    let updatedQuery = 'select * from roles';
    let updatedvalues = [];
    if(req.query.role){
        updatedQuery = 'select * from staff join staff_roles on staff.id = staff_roles.staff_id join roles on roles.id = staff_roles. role_id where roles.name like ?';
        updatedvalues.push(req.query.role);
    }
    staffrolesmodel.setQuery(updatedQuery,updatedvalues)
    staffrolesmodel.getroles((err,role)=>{
        if(err)
        res.send(err);

        console.log('staff role',role);
        res.send(role);
    })
}

exports.createstaffroles = (req,res)=>{
    console.log(req.body,'staffrolessssss');
    const staffrolesdata = new staffrolesmodel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.send({success:false,message:'fill the details'});
    }else{
        staffrolesmodel.createstaffroles(staffrolesdata,(err,staff)=>{
            if(err)
            res.send(err);
            res.json({status:true,message:'staff roles details added successfully',data:staff.insertId});
            
        })

    }
}