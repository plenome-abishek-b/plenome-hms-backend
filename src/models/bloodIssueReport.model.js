var dbConn = require('../../config/db.config');

var BloodIssueReport = function(bloodIssueReport){
    this.id = bloodIssueReport.id
}


let query = '';
let value = []
BloodIssueReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}

BloodIssueReport.GetBloodIssueReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Blood Issue Report  fetched ');
            result(null,res);
         
        }
    })
}
module.exports = BloodIssueReport