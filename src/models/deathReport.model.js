var dbConn = require('../../config/db.config');

var DeathReport = function(deathReport){
    this.id = deathReport.id;
}
let query = '';
let value = []
DeathReport.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}

DeathReport.GetDeathReport= (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('Death Report fetched ');
            result(null,res);
        }
    })
}
module.exports = DeathReport