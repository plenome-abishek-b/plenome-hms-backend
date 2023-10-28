var dbConn = require('../../config/db.config');

var RadiologyPatientReport = function(radiologyPatientReport){
    this.id = radiologyPatientReport.id;
}

let query = '';
let value = []
RadiologyPatientReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}



RadiologyPatientReport.GetRadiologyPatientReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            
            console.log('Radiology Patient Report fetched ');
            result(null,res);
        }
    })
}
module.exports = RadiologyPatientReport