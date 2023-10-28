var dbConn = require('../../config/db.config');

var DashCalc = function(dashCalc){
    this.id = dashCalc.id
}

DashCalc.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue
}

DashCalc.getDashCalc = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('DashCalc  fetched ');
            result(null,res);
        }
    })
}

module.exports = DashCalc