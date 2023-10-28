var dbConn = require('../../config/db.config');

var PathologyPatientReport = function(pathologyPatientReport){
    this.id = pathologyPatientReport.id;
}

let query = '';
let value = []
PathologyPatientReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}


PathologyPatientReport.GetPathologyPatientReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Pathology Patient Report fetched ');
            result(null,res);
        }
    })
}
module.exports = PathologyPatientReport