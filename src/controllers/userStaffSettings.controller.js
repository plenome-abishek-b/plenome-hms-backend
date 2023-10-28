const UserStaffSettingsModel = require('../models/userStaffSettings.model')

exports.getUserStaffSettings= (req,res)=>{

    
    let updatedQuery = 'select staff.employee_id,concat(staff.name," ",staff.surname)as staff_name,staff.email,roles.name as role_name, staff_designation.designation,department.department_name,staff.contact_no,staff.is_active from staff join staff_designation on staff_designation.id = staff.staff_designation_id join department on department.id = staff.department_id join staff_roles on staff_roles.staff_id = staff.id join roles on roles.id = staff_roles.role_id '
    let updatedValues = []

    if(req.query.search){
        updatedQuery += ' where staff.name like ? or staff.employee_id like ? or staff.email like ? or roles.name  like ? or staff_designation.designation like ? or department.department_name like ? or staff.contact_no like ? ';
        updatedValues.push('%'+req.query.search+'%')
        updatedValues.push('%'+req.query.search+'%')
        updatedValues.push('%'+req.query.search+'%')
        updatedValues.push('%'+req.query.search+'%')
        updatedValues.push('%'+req.query.search+'%')
        updatedValues.push('%'+req.query.search+'%')
        updatedValues.push('%'+req.query.search+'%')
    }
    
    UserStaffSettingsModel.setQuery(updatedQuery,updatedValues)
    UserStaffSettingsModel.getUserStaffSettings ((err,staffs)=>{
            if(err)
            res.send(err);
         
            console.log('staffs ',staffs);
            res.send(staffs);
        })
    }

    exports.updateUserStaffSettings = (req,res)=>{

        let updatedQuery = '';
        let updatedValues = []
    
        if(req.query.id){
            updatedQuery = 'update staff SET ? where id = ?'
            updatedValues.push(req.query.id)
        }
        UserStaffSettingsModel.setQuery(updatedQuery,updatedValues)
        const UserStaffSettingsData = new UserStaffSettingsModel(req.body);
        console.log(req.body,"jjjjj");
        console.log(UserStaffSettingsData,"aaaaaaaaa");
        if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
            res.send({success:false,message:'please fill all fields'});
        }else{
            UserStaffSettingsModel.updateUserStaffSettings(UserStaffSettingsData,(err,userStaff)=>{
                if(err){
                res.send(err);
            }else{
                if(UserStaffSettingsData.id == updatedValues[0]){
    
                    res.json({status:true,message:' User Staff Settings updated successfully',data:UserStaffSettingsData.id});
                }
                else{
                    res.json({status:false,message:'the id of the post value and the id given must be same'})
                }
    
            }
            })
        }
    }