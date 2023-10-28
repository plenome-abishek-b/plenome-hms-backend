var dbconn = require('../../config/db.config');
var prescription = function(search){
    this.id = search.id;
}

let query = '';
let value = [];
prescription.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}
prescription.getprescription = (result)=>{
    dbconn.query(query,value,(err,res)=>{
        console.log(query);
        if(err){
            console.log('error occured',err);
            result(null,err);
        }else{
            console.log('prescription fetched' + query);
            result(null,res);
        }
    })
}

module.exports = prescription;