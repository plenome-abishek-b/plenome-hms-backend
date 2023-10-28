var dbConn = require('../../config/db.config');

var IpdReport = function(ipdReport){
    this.id = ipdReport.id;
}


let query = '';
let value = []
IpdReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}
IpdReport.GetIpdReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Ipd Report fetched ');
            result(null,res);
        }
    })
}
module.exports = IpdReport