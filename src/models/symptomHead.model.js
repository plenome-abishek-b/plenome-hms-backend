var dbConn = require('../../config/db.config');

var SymptomsHead = function(symptomsHead){
    this.id = symptomsHead.id;
    this.symptoms_title = symptomsHead.symptoms_title;
    this.description = symptomsHead.description;
    this.type = symptomsHead.type;
    this.created_at = symptomsHead.created_at;
}
SymptomsHead.createSymptomsHead = (headData,result)=>{
    dbConn.query('insert into symptoms set ?',headData,(err,res)=>{
        if (err){
            console.log('Error while inserting data ');
            console.log(err);
            result(null,err);
        } else {
            console.log('symptoms  inserted Successfully');
            result(null,res)
        }
    })
}

let query = ''
let value = []

SymptomsHead.setQuery = (updatedQuery,updatedValue)=>{
    query = updatedQuery;
    value = updatedValue
}
SymptomsHead.getSymptomsHead = (result)=>{
    dbConn.query(query,value,(err,res)=>{
        if(err){
            console.log('Error occured',err);
            result(null,err);
        }else{
            console.log('SymptomsHead  fetched ');
            result(null,res);
        }
    })
}
module.exports = SymptomsHead;