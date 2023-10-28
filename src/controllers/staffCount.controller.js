const StaffCountModel = require('../models/staffCount.model')



exports.getStaffCount= (req,res)=>{

    let updatedQuery = 'select coalesce(count(*),0) count  from staff join staff_roles on staff.id = staff_roles.staff_id join roles on roles.id = staff_roles.role_id where staff.id'
     let updatedValue = []
     if(req.query.roleId){
         updatedQuery += ' and roles.id = ? '
         updatedValue.push(req.query.roleId)              
     }

     StaffCountModel.setQuery(updatedQuery,updatedValue)
     StaffCountModel.getStaffCount ((err,count)=>{
             if(err)
             res.send(err);
          
             console.log('StaffCountModel ',count);
             res.send(count);
         })
    }