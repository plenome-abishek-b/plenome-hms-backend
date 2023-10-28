var dbConn = require('../../config/db.config');

var OpdDischargeReport = function(opdDischargedReport){
    this.id = opdDischargedReport.id;
}
let query = '';
let value = []
OpdDischargeReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}

OpdDischargeReport.GetOpdDischargedReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('opd discharged  Report fetched ');
            result(null,res);
        }
    })
}
module.exports = OpdDischargeReport