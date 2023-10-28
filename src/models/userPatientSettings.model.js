var dbConn = require('../../config/db.config');

var UserPatientSettings = function(userPatientSettings){
    this.id = userPatientSettings.id;
    // this.user_id = userPatientSettings.user_id;
    // this.username = userPatientSettings.username;
    // this.password = userPatientSettings.password;
    // this.role = userPatientSettings.role;
    // this.verification_code = userPatientSettings.verification_code;
    this.is_active = userPatientSettings.is_active;
     // this.created_at = userPatientSettings.created_at
}


let query = ''
let value = []

UserPatientSettings.setQuery = (updatedQuery,updatedValues)=>{
    query = updatedQuery;
    value = updatedValues
}

UserPatientSettings.getUserPatientSettings = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('User Patient Settings  fetched ');
            result(null,res);
        }
    })
}




UserPatientSettings.updateUserPatientSettings = (UserPatientSettingsUpdateData,result)=>{
    dbConn.query(query,[UserPatientSettingsUpdateData,value],(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{

            console.log(query);
            console.log(value,"vvvvv");
            console.log(UserPatientSettingsUpdateData,"uuuuuuu");
            console.log('User Patient Settings Data updated Successfullyyyyy');
            result(null,res)
        }
    });
}
module.exports = UserPatientSettings;