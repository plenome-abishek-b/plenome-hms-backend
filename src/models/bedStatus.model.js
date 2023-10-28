var dbConn = require('../../config/db.config');

var BedStatus = function(bedStatus){
    this.id = bedStatus.id;
}

let query = ''
let value = []

BedStatus.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue
}

BedStatus.getBedStatus = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Bed Status  fetched ');
            result(null,res);
        }
    })
}
module.exports = BedStatus;