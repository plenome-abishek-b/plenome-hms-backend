var dbConn = require('../../config/db.config');

var MedicineName = function(medicineName){
    this.id = medicineName.id;
}
let query = 'select * from pharmacy ';
let value = [];

MedicineName.setQuery = (updatedQuery,updatedValue)=>{
    query=updatedQuery;
    value=updatedValue
}


MedicineName.getName = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('pharmacy details  fetched ');
            result(null,res);
        }
    })
}
module.exports = MedicineName;