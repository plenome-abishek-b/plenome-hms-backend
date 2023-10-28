var dbConn = require('../../config/db.config');

var AmbulanceCallReport = function(ambulanceCallReport){
    this.id = ambulanceCallReport.id;
}

let query = '';
let value = []
AmbulanceCallReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}


AmbulanceCallReport.GetAmbulanceCallReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('IAmbulance Call Report fetched ');
            result(null,res);
           
        }
    })
}
module.exports = AmbulanceCallReport