var dbConn = require('../../config/db.config');
var Treatment_history = function (treatment_history){
    this.id = treatment_history.id;
   
}

let query = '';
let value = []

Treatment_history.setQuery=(updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue;
}

Treatment_history.get_treatment_history = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('treatment_history  fetched ');
            result(null,res);
        }
    })

}
module.exports = Treatment_history