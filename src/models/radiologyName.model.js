var dbConn = require('../../config/db.config');
var RadiologyName = function(radiologyName){
    this.id = radiologyName.id
}
let query = '';
let value = [];

RadiologyName.setQuery = (updatedQuery,updatedValue)=>{
    query=updatedQuery;
    value=updatedValue
}



RadiologyName.getRadiologyName= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('RadiologyName Name fetched ');
            result(null,res);
        }
    })
}
module.exports = RadiologyName