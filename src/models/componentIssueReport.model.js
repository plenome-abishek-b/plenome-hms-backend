var dbConn = require('../../config/db.config');

var ComponentIssueReport = function(componentIssueReport){
    this.id = componentIssueReport.id
}

let query = '';
let value = []
ComponentIssueReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}


ComponentIssueReport.GetComponentIssueReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Component Issue Report fetched ');
            result(null,res);
           
        }
    })
}
module.exports = ComponentIssueReport