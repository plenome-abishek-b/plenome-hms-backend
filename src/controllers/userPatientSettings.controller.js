const UserPatientSettingsModel = require('../models/userPatientSettings.model')



exports.getUserPatientSettings= (req,res)=>{

    
    let updatedQuery = 'select patients.patient_name,patients.mobileno,users.user_id as patient_id, users.username,case when users.is_active = "yes" then 1 else 0 end as action from users join patients on patients.id = users.user_id '
    let updatedValues = []

    if(req.query.search){
        updatedQuery += ' where patients.patient_name like ? or users.user_id like ? or users.username like ? or patients.mobileno like ?';
        updatedValues.push('%'+req.query.search+'%')
        updatedValues.push('%'+req.query.search+'%')
        updatedValues.push('%'+req.query.search+'%')
        updatedValues.push('%'+req.query.search+'%')

    }
    
    UserPatientSettingsModel.setQuery(updatedQuery,updatedValues)
    UserPatientSettingsModel.getUserPatientSettings ((err,patients)=>{
            if(err)
            res.send(err);
         
            console.log('patients ',patients);
            res.send(patients);
        })
    }


exports.updateUserPatientSettings = (req,res)=>{

    let updatedQuery = '';
    let updatedValues = []

    if(req.query.id){
        updatedQuery = 'update users SET ? where id = ?'
        updatedValues.push(req.query.id)
    }
    UserPatientSettingsModel.setQuery(updatedQuery,updatedValues)
    const UserPatientSettingsData = new UserPatientSettingsModel(req.body);
    console.log(req.body,"jjjjj");
    console.log(UserPatientSettingsData,"aaaaaaaaa");
    if(req.body.constructor === Object && Object.keys(req.body).length ===0 ){
        res.send({success:false,message:'please fill all fields'});
    }else{
        UserPatientSettingsModel.updateUserPatientSettings(UserPatientSettingsData,(err,BedList)=>{
            if(err){
            res.send(err);
        }else{
            if(UserPatientSettingsData.id == updatedValues[0]){

                res.json({status:true,message:' User Patient Settings updated successfully',data:UserPatientSettingsData.id});
            }
            else{
                res.json({status:false,message:'the id of the post value and the id given must be same'})
            }

        }
        })
    }
}
