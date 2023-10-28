var dbConn = require('../../config/db.config');

var OTReport = function(otReport){
    this.id = otReport.id;
}

let query = '';
let value = []
OTReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}


OTReport.GetOTReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('OT Report fetched ');
            result(null,res);
        }
    })
}
module.exports = OTReport