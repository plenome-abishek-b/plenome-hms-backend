var dbConn = require('../../config/db.config');
var DosageDetails = function(dosageDetails){
    this.id = dosageDetails.id;
}
let query = 'select * from pharmacy ';
let value = [];
DosageDetails.setQuery = (updatedQuery,updatedValue)=>{
    query=updatedQuery;
    value=updatedValue
}

DosageDetails.getDosage = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Dosagedetails  fetched ');
            result(null,res);
        }
    })
}
module.exports = DosageDetails;