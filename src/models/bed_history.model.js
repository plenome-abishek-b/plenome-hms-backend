var dbConn = require('../../config/db.config');
var Bed_history = function(bed_history){
    this.id = bed_history.id;
    this.created_at = bed_history.created_at;
}

let query = '';
let value = []

Bed_history.setQuery = (updatedQuery,updatedValue)=>{
    query=updatedQuery;
    value=updatedValue;
}

Bed_history.get_bed_history = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('patient_bed_history fetched ');
            result(null,res);
        }
    })
}

module.exports = Bed_history;