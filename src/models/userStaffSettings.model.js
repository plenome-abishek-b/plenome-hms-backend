var dbConn = require('../../config/db.config');
var UserStaffSettings = function(userStaffSettings){
    this.id = userStaffSettings.id;
    this.is_active = userStaffSettings.is_active;

}
let query = ''
let value = []

UserStaffSettings.setQuery = (updatedQuery,updatedValues)=>{
    query = updatedQuery;
    value = updatedValues
}


UserStaffSettings.getUserStaffSettings = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('User Staff Settings  fetched ');
            result(null,res);
        }
    })
}

UserStaffSettings.updateUserStaffSettings = (UserStaffSettingsUpdateData,result)=>{
    dbConn.query(query,[UserStaffSettingsUpdateData,value],(err,res)=>{
        if (err){
            console.log(err)
            console.log('Error while inserting data ');
            result(null,err);
        }else{

            console.log(query);
            console.log(value,"vvvvv");
            console.log(UserStaffSettingsUpdateData,"uuuuuuu");
            console.log('User Staff Settings Data updated Successfullyyyyy');
            result(null,res)
        }
    });
}
module.exports = UserStaffSettings;