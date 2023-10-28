const staff_roles = require('../models/rolebased.model');
exports.getstaffroles = (req,res)=>{
    let updatedquery = 'select staff.id as staff_id, staff.email,staff.password,roles.name as role_name from staff_roles join staff on staff.id = staff_roles.staff_id join roles on roles.id = staff_roles.role_id ';
    let updatedvalues = []

    if(req.query.email){
        updatedquery += ' where staff.email = ?'
        updatedvalues.push(req.query.email)
    }
    staff_roles.setquery(updatedquery,updatedvalues)
    staff_roles.getstaffroles((err,roles)=>{
        if(err)
        res.send(err);

        console.log('staff roles',roles);
        res.send(roles);
    })
}