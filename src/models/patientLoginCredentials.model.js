var dbConn = require('../../config/db.config');

var PatientLoginCredentials = function(patientLoginCredentials){
    this.id = patientLoginCredentials.id;
}
let query = '';
let value = []
PatientLoginCredentials.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}

PatientLoginCredentials.GetCredentials= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('patient login credentials  fetched ');
            result(null,res);
        }
    })
}
module.exports = PatientLoginCredentials