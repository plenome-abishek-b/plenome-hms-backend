const staffrolesmodel = require('../models/user_by_nurse.model');

exports.getroles = (req,res)=>{
    console.log('');
    let updatedQuery = 'select staff.id,staff.name,staff_roles.staff_id,staff_roles.role_id,roles.name as role_name from staff join staff_roles on staff_roles.staff_id = staff.id join roles on  roles.id = staff_roles.role_id where role_id = 9 ';
    let updatedvalues = [];
   
    staffrolesmodel.setQuery(updatedQuery,updatedvalues)
    staffrolesmodel.getroles((err,role)=>{
        if(err)
        res.send(err);

        console.log('staff role',role);
        res.send(role);
    })
}