var dbConn = require('../../config/db.config');

var BirthReport = function(birthReport){
    this.id = birthReport.id;
}

let query = '';
let value = []
BirthReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}

BirthReport.GetBirthReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Birth Report fetched ');
            result(null,res);
        }
    })
}
module.exports = BirthReport