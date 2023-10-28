var dbConn = require('../../config/db.config');

var PathologyName = function(pathologyName){
    this.id = pathologyName.id
}
let query = '';
let value = [];


PathologyName.setQuery = (updatedQuery,updatedValue)=>{
    query=updatedQuery;
    value=updatedValue
}


PathologyName.getPathologyName= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('PathologyName fetched ');
            result(null,res);
        }
    })
}
module.exports = PathologyName